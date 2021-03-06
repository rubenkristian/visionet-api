<?php
namespace App\Model;
use System\Model as Model;

class Leader extends Model {
    public function login(string $username, string $password) {
        $leader = $this->checkAccountLeaderExists($username);
        
        if($leader) {
            $hash_password = $leader['password'];

            if(password_verify($password, $hash_password)) {
                return array('status'=> true, 'data'=> array('id'=> $leader['id'], 'type'=> 1, 'username'=> $leader['username'], 'location'=> $leader['location'],'name'=> $leader['first_name'].' '.$leader['last_name']));
            }
        }

        return array('status'=> false, 'msg'=> 'Username atau password salah.');
    }

    public function profile($type, $id) {
        $result = $this->db->selectColumns(array('id', 'first_name', 'last_name', 'username'), 'leader', 'id = ?', array($id));

        if($result) {
            return array('status'=> true, 'data'=> array('type'=> $type, 'id'=> $result[0]['id'], 'firstname'=> $result[0]['first_name'], 'lastname'=> $result[0]['last_name'], 'name'=> $result[0]['first_name'].' '.$result[0]['last_name'], 'username'=> $result[0]['username']));
        } else {
            return array('status'=> false, 'msg'=> 'cannot find profile');
        }
    }

    public function changeUsername(int $id, string $username) {
        $check_username = $this->checkAccountLeaderExists($username);

        if($check_username) {
            return array('status'=> false, 'msg'=> 'username sudah terpakai.');
        } else {
            $fields = array('username');
            $values = array($username);

            $result = $this->db->update('leader', $fields, $values, 'id = '.$id_admin);

            if($result > 0) {
                return array('status'=> true, 'msg'=> 'berhasil memperbaharui data.', 'data'=> array('id'=> $id_admin, 'username'=> $username));
            } else {
                return array('status'=> false, 'msg'=> 'gagal memperbaharui.');
            }
        }
    }

    public function changePassword(int $id, string $password) {
        $fields = array('password');
        $values = array(password_hash($password, PASSWORD_BCRYPT, ['cost'=>12]));

        $result = $this->db->update('leader', $fields, $values, 'id = '.$id);

        if($result) {
            return array('status'=> true, 'msg'=> 'berhasil memperbaharui password.');
        } else {
            return array('status'=> false, 'msg'=> 'gagal memperbaharui password.');
        }
    }

    public function changeName(int $id, string $firstname, string $lastname) {
        $fields = array('first_name', 'last_name');
        $values = array($firstname, $lastname);

        $result = $this->db->update('leader', $fields, $values, 'id = '.$id);

        if($result) {
            return array('status'=> true, 'data'=> array('id'=> $id, 'name'=> $firstname.' '.$lastname));
        } else {
            return array('status'=> false, 'msg'=> 'Gagal memperbaharui nama');
        }
    }

    private function checkAccountLeaderExists($username) {
        $leaders = $this->db->selectColumns(array('id', 'first_name', 'last_name', 'username', 'password', 'location'), 'leader', 'username = ? AND deleted = ?', array($username, 0));

        if($leaders) {
            return $leaders[0];
        } else {
            return null;
        }
    }

    public function addRecord(string $first_name, string $last_name, string $username, string $password, int $location) {
        $checkusername = $this->checkAccountLeaderExists($username);

        if($checkusername) {
            return array('status'=> false, 'msg'=> 'username sudah terpakai.');
        } else {
            $fields = array('first_name', 'last_name', 'username', 'password', 'location');
            $values = array($first_name, $last_name, $username, password_hash($password, PASSWORD_BCRYPT, ['cost'=>12]), $location);
            
            $leader_insert = $this->db->insert('leader', $fields, $values);
    
            if($leader_insert) {
                return array('status'=> true, 'id'=> $leader_insert);
            } else {
                return array('status'=> false, 'msg'=> 'failed to insert data.');
            }
        }
    }

    public function editRecord(int $id_leader, string $first_name, string $last_name, int $location) {
        $fields = array('first_name', 'last_name', 'location');
        $values = array($first_name, $last_name, $location);

        $leader_update = $this->db->update('leader', $fields, $values, 'id = '.$id_leader);

        if($leader_update > 0) {
            return array('status'=> true, 'msg'=> 'berhasil memperbaharui.', 'data'=> array('id'=> $id_leader, 'firstname'=> $first_name, 'lastname'=> $last_name));
        } else {
            return array('status'=> false, 'msg'=> 'gagal memperbaharui.');
        }
    }

    public function deleteRecord(int $id_leader) {
        $fields = array('deleted');
        $values = array(1);

        // $leader_delete = $this->db->delete('leader', 'id = ?', array($id_leader));
        $leader_delete = $this->db->update('leader', $fields, $values, 'deleted = 0 AND id = '.$id_leader);

        if($leader_delete) {
            return array('status'=> true, 'msg'=> 'berhasil menghapus data.');
        } else {
            return array('status'=> false, 'msg'=> 'gagal menghapus data.');
        }
    }

    public function listRecord(string $search, int $page, string $orderby, string $order, int $limit) {
        $index = ($page - 1) * $limit;

        $src = '%'.trim($search).'%';

        $query_leaders = 'SELECT
        leader.id,
        leader.first_name,
        leader.last_name,
        leader.username,
        `location`.`name` as locationname,
        leader.location
        FROM leader
        INNER JOIN `location` ON leader.location = `location`.id
        WHERE (leader.first_name LIKE ? OR leader.last_name LIKE ? OR leader.username LIKE ?) AND leader.deleted = ?
        ORDER BY '.$orderby.' DESC LIMIT '.$index.', '.$limit;

        $list_leaders = $this->db->rawQueryType('select', $query_leaders, array($src, $src, $src, 0));

        if($list_leaders) {
            return array('status'=> true, 'data'=> $list_leaders);
        } else {
            return array('status'=> false, 'msg'=> 'cannot find list data.');
        }
    }

    public function getRecord(int $id_leader) {
        $query_leaders = 'SELECT
        leader.id,
        leader.first_name,
        leader.last_name,
        leader.username,
        leader.location,
        `location`.`name` as locationname
        FROM leader
        INNER JOIN `location` ON leader.location = `location`.id
        ORDER BY '.$order.' LIMIT '.$index_start.', '.$limit;

        $list_leaders = $this->db->rawQueryType('select', $query_leaders, array());

        if($list_leaders) {
            return array('status'=> true, 'data'=> $list_leaders[0]);
        } else {
            return array('status'=> false, 'msg'=> 'cannot find any data.');
        }
    }
    
    public function allRows(string $search) {
        $src = '%'.trim($search).'%';

        $query = 'SELECT count(*) AS len 
        FROM leader
        INNER JOIN `location` ON leader.location = `location`.id
        WHERE (leader.first_name LIKE ? OR leader.last_name LIKE ? OR leader.username LIKE ?) AND leader.deleted = ?';

        $res = $this->db->rawQueryType('select', $query, array($src, $src, $src, 0));

        return $res[0]['len'];
    }
 }