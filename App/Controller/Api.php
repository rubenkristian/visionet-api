<?php
namespace App\Controller;

use System\Controller as Controller;
use App\Model\Admin as Admin;
use App\Model\Leader as Leader;
use App\Model\Backupleader as Backupleader;
use App\Model\Engineer as Engineer;
use App\Model\Log as Log;
use App\Model\Asset as Asset;
use App\Model\Brand as Brand;
use App\Model\Customer as Customer;
use App\Model\Device as Device;
use App\Model\Location as Location;
use App\Model\Warehouse as Warehouse;
use App\Model\Woec as Woec;
use App\Model\Workorder as Workorder;
use App\Model\Condition as Condition;
use App\Model\StockIn as StockIn;
use App\Model\StockOut as StockOut;
use App\Model\StockOpname as StockOpname;

class Api extends Controller {
    private const KEY = 'qwerty123456789';
    private int $id;
    private int $type;
    private string $name;
    private string $username;
    private int $location = -1;
    private $thrid_path;

    public function __construct() {
        $other_path = $this->req?->getUri()?->getParamsPaths();

        if(count($other_path) > 0) {
            $this->thrid_path = $other_path[0];
        }

        $second = strtolower($this->req?->getUri()?->getSecondPath());

        if(isset($_SERVER['HTTP_ORIGIN'])) {
            header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
            header('Access-Control-Allow-Credentials: true');
            header('Access-Control-Max-Age: 86400');    // cache for 1 day
        }
        
        // Access-Control headers are received during OPTIONS requests
        if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
            if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
                // may also be using PUT, PATCH, HEAD etc
                header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         
            
            if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
                header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
        
            exit(0);
        }
        
        header('Content-type: application/json');

        $second_link = ['authentication', 'test'];
        
        if(!in_array($second, $second_link)) {
            $this->loadLib('jwt', 'JWT');

            $result = $this->jwt->authenticated(self::KEY);

            if($result['status']) {
                $token  = $result['token'];

                $this->id       = $token->id;
                $this->type     = $token->type;
                $this->name     = $token->name;
                $this->username = $token->username;

                if(($this->type !== 0) && $token->location) {
                    $this->location = $token->location;
                }

                $this->loadModel('log', new Log());
            } else {
                $this->res->json(array('status'=> false, 'msg'=> 'cannot response this request, token not found.'));

                exit();
            }
        }
    }

    public function test() {
        // $data = json_decode(file_get_contents('php://input'), true);
        // print_r($data);
        // var_dump($_FILES);
        // var_dump($_POST);
        // var_dump($_COOKIE);
        // var_dump($_SESSION);
    }

    public function index() {
        $this->res?->json(array('version'=>'0.1.0', 'name'=>'visionet'));
    }

    public function stock() {
        if($this->req?->getMethod() === 'GET') {
            $this->loadModel('asset', new Asset());

            $result = $this->asset->getDetailAsset();

            if($result['status']) {
                return $this->res?->json(array('status'=> true, 'data'=> $result['data']));
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> $result['msg']));
            }
        }
        return $this->res?->json(array('status'=> false, 'msg'=> 'cannot handle request.'));
    }

    public function home() {
        if($this->req?->getMethod() === 'GET') {
            $this->loadModel('admin', new Admin());

            $customer   = $this->admin->customerCount();
            $assets     = $this->admin->assetCount();
            $wo         = $this->admin->workorderCount();
            $stock      = $this->admin->allstockCount();

            // var_dump(array(
            //     'all'=> $asset_all, 
            //     'new'=> $asset_new,
            //     'used'=> $asset_used,
            //     'repaired'=> $asset_repaired,
            //     'damaged'=> $asset_damaged,
            //     'dump'=> $asset_dump));
            // die();

            return $this->res?->json(
                array(
                    'status'=> true, 
                    'data'=>array(
                        'customer'=> $customer, 
                        'assets'=> $assets,
                        'wo'=> $wo,
                        'stock'=> $stock)));
        }
        return $this->res?->json(array('status'=> false, 'msg'=> 'cannot handle request.'));
    }

    public function checkperiodic() {
        if($this->req?->getMethod() === 'POST') {
            
        }
    }

    public function authentication() {
        if($this->req?->getMethod() === 'POST') {
            $username = $this->req->Post('username');
            $password = $this->req->Post('password');
            $type     = $this->req->Post('type');

            if($username !== '' && $password !== '' && $type >= 0 && $type < 4) {
                // check username and type
                // if username is found in table get row of data and get password coloum
                // check if password in database is verified with password from request

                if($type == 0) {
                    $this->loadModel('authentication', new Admin());
                } else if($type == 1) {
                    $this->loadModel('authentication', new Leader());
                } else if($type == 2) {
                    $this->loadModel('authentication', new Backupleader());
                } else if($type == 3) {
                    $this->loadModel('authentication', new Engineer());
                } else {
                    return $this->res->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
                }

                $result = $this->authentication->login($username, $password);

                if($result['status']) {
                    $data = $result['data'];

                    return $this->res->json(array('status'=> true, 'token'=> $this->jwt->createToken($data, self::KEY), 'data'=> $data));
                } else {
                    return $this->res->json(array('status'=> false, 'msg'=> 'username or password is wrong, please check again.'));
                }
            } else {
                return $this->res->json(array('status'=> false, 'msg'=> 'username or password is empty, please check fields.'));
            }
        }

        return $this->res->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
    }

    // light search data
    public function light($model) {
        if($this->req?->getMethod() === 'GET') {
            if($model === 'device') {
                $this->loadModel('content', new Device());
            } else if($model === 'brand') {
                $this->loadModel('content', new Brand());
            } else if($model === 'location') {
                $this->loadModel('content', new Location());
            } else if($model === 'customer') {
                $this->loadModel('content', new Customer());
            } else if($model === 'warehouse') {
                $this->loadModel('content', new Warehouse());
            } else if($model === 'assets') {
                $this->loadModel('content', new Asset());
            } else if($model === 'condition') {
                $this->loadModel('content', new Condition());
            } else if($model === 'engineer') {
                $this->loadModel('content', new Engineer());
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
            }

            $search = $this->req?->Get('search');

            $result = $this->content->lightListRecord($search);

            if($result['status']) {
                return $this->res?->json(array('status'=> true, 'data'=> array('list'=>$result['data'])));
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> $result['msg']));
            }
        }

        return $this->res->json(array('status'=> false, 'msg'=> 'cannot response this request'));
    }

    // list data
    public function list($model) {
        if($this->req?->getMethod() === 'GET') {
            if($model === 'device') {
                $this->loadModel('content', new Device());
            } else if($model === 'brand') {
                $this->loadModel('content', new Brand());
            } else if($model === 'location') {
                $this->loadModel('content', new Location());
            } else if($model === 'customer') {
                $this->loadModel('content', new Customer());
            } else if($model === 'warehouse') {
                $this->loadModel('content', new Warehouse());
            } else if($model === 'assets') {
                $this->loadModel('content', new Asset());
            } else if($model === 'backupleader') {
                $this->loadModel('content', new Backupleader());
            } else if($model === 'leader') {
                $this->loadModel('content', new Leader());
            } else if($model === 'engineer') {
                $this->loadModel('content', new Engineer());
            } else if($model === 'workorder') {
                $this->loadModel('content', new WorkOrder());
            } else if($model === 'admin') {
                $this->loadModel('content', new Admin());
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
            }

            $page   = (int) $this->req?->Get('page');
            $search = $this->req?->Get('search');
            $sortby = $this->req?->Get('sortby');
            $sort   = $this->req?->Get('sort');
            $rows   = (int) $this->req?->Get('rows');

            $result = $this->content->listRecord($search, $page, $sortby == 'null' ? 'id' : $sortby, $sort == 'undefined' ? 'ASC' : $sort, $rows);
            $len = $this->content->allRows($search);

            if($result['status']) {
                return $this->res?->json(array('status'=> true, 'data'=> array('list'=>$result['data'], 'len'=>(int)$len)));
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> $result['msg']));
            }
        }

        return $this->res->json(array('status'=> false, 'msg'=> 'cannot response this request'));
    }

    // add data
    public function add($model) {
        if($this->req?->getMethod() === 'POST') {
            if($model === 'device') {
                $this->loadModel('content', new Device());
            } else if($model === 'brand') {
                $this->loadModel('content', new Brand());
            } else if($model === 'location') {
                $this->loadModel('content', new Location());
            } else if($model === 'customer') {
                $this->loadModel('content', new Customer());
            } else if($model === 'warehouse') {
                $this->loadModel('content', new Warehouse());
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
            }

            $name = $this->req?->Post('name');

            $result = $this->content->addRecord($name);

            if($result['status']) {
                return $this->res?->json(array('status'=> true, 'data'=> $result['id']));
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> $result['msg']));
            }
        }

        return $this->res->json(array('status'=> false, 'msg'=> 'cannot response this request'));
    }

    // update data
    public function update($model) {
        if($this->req?->getMethod() === 'POST') {
            if($model === 'device') {
                $this->loadModel('content', new Device());
            } else if($model === 'brand') {
                $this->loadModel('content', new Brand());
            } else if($model === 'location') {
                $this->loadModel('content', new Location());
            } else if($model === 'customer') {
                $this->loadModel('content', new Customer());
            } else if($model === 'warehouse') {
                $this->loadModel('content', new Warehouse());
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
            }
            
            $id   = (int) $this->req?->Post('id');
            $name = $this->req?->Post('name');

            $result = $this->content->editRecord($id, $name);

            if($result['status']) {
                return $this->res?->json(array('status'=> true, 'msg'=> $result['msg'], 'data'=> $result['data']));
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> $result['msg']));
            }
        }

        return $this->res->json(array('status'=> false, 'msg'=> 'cannot response this request'));
    }

    // delete data
    
    public function delete($model) {
        if($this->req?->getMethod() === 'POST') {
            if($model === 'device') {
                $this->loadModel('content', new Device());
            } else if($model === 'brand') {
                $this->loadModel('content', new Brand());
            } else if($model === 'location') {
                $this->loadModel('content', new Location());
            } else if($model === 'customer') {
                $this->loadModel('content', new Customer());
            } else if($model === 'warehouse') {
                $this->loadModel('content', new Warehouse());
            } else if($model === 'asset') {
                $this->loadModel('content', new Asset());
            } else if($model === 'admin') {
                $this->loadModel('content', new Admin());
            } else if($model === 'backupleader') {
                $this->loadModel('content', new Backupleader());
            } else if($model === 'leader') {
                $this->loadModel('content', new Leader());
            } else if($model === 'engineer') {
                $this->loadModel('content', new Engineer());
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
            }

            $id = (int) $this->req?->Post('id');

            $result = $this->content->deleteRecord($id);

            if($result['status']) {
                return $this->res?->json(array('status'=> true, 'data'=> $result['msg']));
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> $result['msg']));
            }
        }

        return $this->res->json(array('status'=> false, 'msg'=> 'cannot response this request'));
    }

    //example insert data

    public function insert($model) {
        if($this->req?->getMethod() === 'POST') {
            if($model === 'admin') {
                $this->loadModel('account', new Admin());
            } else if($model === 'leader') {
                $this->loadModel('account', new Leader());
            } else if($model === 'backupleader') {
                $this->loadModel('account', new Backupleader());
            } else if($model === 'engineer') {
                $this->loadModel('account', new Engineer());
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
            }

            if($model === 'admin') {
                $fullname   = $this->req?->Post('fullname');
                $username   = $this->req?->Post('username');
                $password   = $this->req?->Post('password');

                $result = $this->account->addAdmin($fullname, $username, $password);
            } else {
                $firstname  = $this->req?->Post('firstname');
                $lastname   = $this->req?->Post('lastname');
                $location   = (int) $this->req?->Post('location');
                $username   = $this->req?->Post('username');
                $password   = $this->req?->Post('password');

                $result = $this->account->addRecord($firstname, $lastname, $username, $password, $location);
            }

            if($result['status']) {
                return $this->res?->json(array('status'=> true, 'data'=> $result['id']));
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> $result['msg']));
            }
        }

        return $this->res->json(array('status'=> false, 'msg'=> 'cannot response this request'));
    }

    public function getprofile($type, $id) {
        if($this->req?->getMethod() === 'GET') {
            if($type === 'admin') {
                $this->loadModel('account', new Admin());
            } else if($type === 'leader') {
                $this->loadModel('account', new Leader());
            } else if($type === 'backupleader') {
                $this->loadModel('account', new Backupleader());
            } else if($type === 'engineer') {
                $this->loadModel('account', new Engineer());
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
            }

            $result = $this->account->profile($id);

            if($result['status']) {
                return $this->res?->json(array('status'=> true, 'data'=> $result['data']));
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> $result['msg']));
            }
        }
    }

    public function changepassword($model) {
        if($this->req?->getMethod() === 'POST') {
            if($model === 'admin') {
                $this->loadModel('account', new Admin());
            } else if($model === 'leader') {
                $this->loadModel('account', new Leader());
            } else if($model === 'backupleader') {
                $this->loadModel('account', new Backupleader());
            } else if($model === 'engineer') {
                $this->loadModel('account', new Engineer());
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
            }

            $id         = (int) $this->req?->Post('id');
            $password   = $this->req?->Post('password');

            $result = $this->account->changePassword($id, $password);

            if($result['status']) {
                return $this->res?->json(array('status'=> true, 'msg'=> $result['msg']));
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> $result['msg']));
            }
        }
    }

    public function changeusername($model) {
        if($this->req?->getMethod() === 'POST') {
            if($model === 'admin') {
                $this->loadModel('account', new Admin());
            } else if($model === 'leader') {
                $this->loadModel('account', new Leader());
            } else if($model === 'backupleader') {
                $this->loadModel('account', new Backupleader());
            } else if($model === 'engineer') {
                $this->loadModel('account', new Engineer());
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
            }

            $id         = $this->req?->Post('id');
            $username   = $this->req?->Post('username');

            $result = $this->account->changeUsername($id, $uesrname);

            if($result['status']) {
                return $this->res?->json(array('status'=> true, 'msg'=> $result['msg']));
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> $result['msg']));
            }
        }
    }

    //example insert data

    public function edit($model) {
        if($this->req?->getMethod() === 'POST') {
            if($model === 'admin') {
                $this->loadModel('account', new Admin());
            } else if($model === 'leader') {
                $this->loadModel('account', new Leader());
            } else if($model === 'backupleader') {
                $this->loadModel('account', new Backupleader());
            } else if($model === 'engineer') {
                $this->loadModel('account', new Engineer());
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
            }

            $id_selected = $this->req?->Post('id');

            if($model === 'admin') {
                $fullname   = $this->req?->Post('fullname');

                $result = $this->account->editRecord($id_selected, $fullname);
            } else {
                $firstname  = $this->req?->Post('firstname');
                $lastname   = $this->req?->Post('lastname');
                $location   = (int) $this->req?->Post('location');

                $result = $this->account->editRecord($id_selected, $firstname, $lastname, $location);
            }

            if($result['status']) {
                return $this->res?->json(array('status'=> true, 'message'=> $result['msg'], 'data'=> $result['data']));
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> $result['msg']));
            }
        }

        return $this->res->json(array('status'=> false, 'msg'=> 'cannot response this request'));
    }

    public function addasset() {
        if($this->req?->getMethod() === 'POST' && $this->type === 0) {
            $this->loadModel('asset', new Asset());

            $id_device_name     = (int) $this->req?->Post('device_id');
            $id_device_brand    = (int) $this->req?->Post('brand_id');
            $model              = $this->req?->Post('model');
            $serial_number      = $this->req?->Post('serial_number');
            $description        = $this->req?->Post('description');

            $result = $this->asset->addAsset($id_device_name, $id_device_brand, $model, $serial_number, $description);
            
            if($result['status']) {
                return $this->res->json(array('status'=> true, 'data'=> array('id'=> $result['id'])));
            } else {
                return $this->res->json(array('status'=> false, 'msg'=> $result['msg']));
            }
        }

        return $this->res->json(array('status'=> false, 'msg'=> 'can not response this request.'));
    }

    public function updateasset() {
        if($this->req?->getMethod() === 'POST' && $this->type === 0) {
            $this->loadModel('asset', new Asset());

            $id                 = (int) $this->req?->Post('id');
            $id_device_name     = (int) $this->req?->Post('device_id');
            $id_device_brand    = (int) $this->req?->Post('brand_id');
            $model              = $this->req?->Post('model');
            $serial_number      = $this->req?->Post('serial_number');
            $description        = $this->req?->Post('description');

            $result = $this->asset->editAsset($id, $id_device_name, $id_device_brand, $model, $serial_number, $description);
            
            if($result['status']) {
                return $this->res->json(array('status'=> true, 'msg'=> $result['msg']));
            } else {
                return $this->res->json(array('status'=> false, 'msg'=> $result['msg']));
            }
        }

        return $this->res->json(array('status'=> false, 'msg'=> 'can not response this request.'));
    }

    public function deleteworkorder() {
        if($this->req?->getMethod() === 'POST' && $this->type === 0) {
            $this->loadModel('workorder', new WorkOrder());

            $idwo       = (int) $this->req?->Post('id');

            $result = $this->workorder->deleteWork($idwo);
            
            if($result['status']) {
                return $this->res->json(array('status'=> true, 'msg'=> $result['msg']));
            } else {
                return $this->res->json(array('status'=> false, 'msg'=> $result['msg']));
            }
        }

        return $this->res->json(array('status'=> false, 'msg'=> 'can not response this request.'));
    }

    public function addworkorder() {
        if($this->req?->getMethod() === 'POST' && $this->type === 0) {
            $this->loadModel('workorder', new WorkOrder());

            $idasset    = (int) $this->req?->Post('asset');
            $idcustomer = (int) $this->req?->Post('customer');
            $idlocation = (int) $this->req?->Post('location');

            $result = $this->workorder->createWork($idasset, $idlocation, $idcustomer);
            
            if($result['status']) {
                return $this->res->json(array('status'=> true, 'data'=> array('id'=> $result['id'])));
            } else {
                return $this->res->json(array('status'=> false, 'msg'=> $result['msg']));
            }
        }

        return $this->res->json(array('status'=> false, 'msg'=> 'can not response this request.'));
    }

    public function updateworkorder() {
        if($this->req?->getMethod() === 'POST' && $this->type === 0) {
            $this->loadModel('workorder', new WorkOrder());

            $idwork     = (int) $this->req?->Post('id');
            $idcustomer = (int) $this->req?->Post('customer');
            $idlocation = (int) $this->req?->Post('location');

            $result = $this->workorder->updateWork($idwork, $idlocation, $idcustomer);
            
            if($result['status']) {
                return $this->res->json(array('status'=> true, 'msg'=> $result['msg']));
            } else {
                return $this->res->json(array('status'=> false, 'msg'=> $result['msg']));
            }
        }

        return $this->res->json(array('status'=> false, 'msg'=> 'can not response this request.'));
    }

    // api for leader and backup leader

    public function workorderdetail() {
        if($this->req?->getMethod() === 'GET') {
            $this->loadModel('wo', new Workorder());

            $id = (int) $this->req?->Get('id');

            $result = $this->wo->detailWO($id);

            if($result['status']) {
                return $this->res->json(array('status'=> true, 'data'=> $result['data']));
            } else {
                return $this->res->json(array('status'=> false, 'msg'=> $result['msg']));
            }
        }

        return $this->res->json(array('status'=> false, 'msg'=> 'can not response this request.'));
    }

    public function workorderrequest() {
        if($this->req?->getMethod() === 'GET' && ($this->type === 1 || $this->type == 2)) {
            $this->loadModel('wo', new Workorder());

            $date = $this->req?->Get('date');
            $page = (int) $this->req?->Get('page');

            $result = $this->wo->listWorkOrderReq($date, $page, (int) $this->location);

            if($result['status']) {
                return $this->res->json(array('status'=> true, 'data'=> array('list'=> $result['data'])));
            } else {
                return $this->res->json(array('status'=> false, 'msg'=> $result['msg']));
            }
        }

        return $this->res->json(array('status'=> false, 'msg'=> 'can not response this request.'));
    }

    public function setengineer() {
        if($this->req?->getMethod() === 'POST' && ($this->type === 1 || $this->type == 2)) {
            $wo_id          = (int) $this->req?->Post('idwo');
            $engineer_id    = (int) $this->req?->Post('idengineer');
            
            $this->loadModel('wo', new Workorder());

            $result = $this->wo->signEngineer($wo_id, $engineer_id);

            if($result['status']) {
                return $this->res->json(array('status'=> true, 'msg'=> $result['msg']));
            } else {
                return $this->res->json(array('status'=> false, 'msg'=> $result['msg']));
            }
        }

        return $this->res->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
    }

    public function engineersubmitlist() {
        if($this->req?->getMethod() === 'GET' && ($this->type === 1 || $this->type == 2)) {
            $this->loadModel('woec', new Woec());

            $date = $this->req?->Get('date');
            $page = (int) $this->req?->Get('page');

            $result = $this->woec->listWOEC($date, $page, (int) $this->location);

            if($result['status']) {
                return $this->res->json(array('status'=> true, 'data'=> array('list'=> $result['data'])));
            } else {
                return $this->res->json(array('status'=> false, 'msg'=> $result['msg']));
            }
        }

        return $this->res->json(array('status'=> false, 'msg'=> 'can not response this request.'));
    }

    public function confirmwork() {
        if($this->req?->getMethod() === 'POST' && ($this->type === 1 || $this->type == 2)) {
            $woecid  = $this->req?->Post('id');
            
            $this->loadModel('woec', new Woec());

            $result = $this->woec->confirmWoec($woecid);

            if($result['status']) {
                return $this->res->json(array('status'=> true, 'msg'=> $result['msg']));
            } else {
                return $this->res->json(array('status'=> false, 'msg'=> $result['msg']));
            }
        }

        return $this->res->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
    }

    // api for engineer

    public function listengineerworkorder() {
        if($this->req?->getMethod() === 'GET' && $this->type === 3) {
            $dateselect = $this->req?->Get('date');
            $page       = $this->req?->Get('page');

            $this->loadModel('wo', new Workorder());

            $result = $this->wo->listWorkOrderEngineer($dateselect, $page, $this->id, $this->location);

            if($result['status']) {
                return $this->res->json(array('status'=> true, 'data'=> array('list'=> $result['data'])));
            } else {
                return $this->res->json(array('status'=> false, 'msg'=> $result['msg']));
            }
        }

        return $this->res->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
    }

    public function listwoec($action) {
        if($this->req?->getMethod() === 'GET' && $this->type === 3) {
            $id_engineer    = (int) $this->id;
            
            $dateselect = $this->req?->Get('date');
            $page       = (int) $this->req?->Get('page');

            $this->loadModel('woec', new Woec());

            $result = null;

            if($action === 'progress') {
                $result = $this->woec->listProgress($dateselect, $page, $id_engineer);
            } else if($action === 'close') {
                $result = $this->woec->listClose($dateselect, $page, $id_engineer);
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> 'Permintaan gagal.'));
            }

            if($result['status']) {
                return $this->res?->json(array('status'=> true, 'data'=> array('list'=> $result['data'])));
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> $result['msg']));
            }
        }

        return $this->res->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
    }

    public function submitwoec() {
        if($this->req?->getMethod() === 'POST' && $this->type === 3) {
            $id_engineer    = (int) $this->id;
            $id_work_order  = (int) $this->req?->Post('idwo');
            $descs = $this->req?->Post('desc');

            $this->loadModel('woec', new Woec());

            $desc_list = json_encode($descs);

            $images_uploads = array();
            $length_images  = count($_FILES['image']['name']);

            $folder_images = $id_work_order.date('Ymdhis');

            $folder_wo_images = __DIR__.'../../../public/uploads/'.$folder_images;

            if(!is_dir($folder_wo_images)) {
                mkdir($folder_wo_images);
            }
            
            if($length_images <= 6 && $length_images > 0) {
                for($index = 0; $index < $length_images; $index++) {
                    $uploadfiles = $_FILES['image']['tmp_name'][$index];

                    $check_image = getimagesize($uploadfiles);

                    if($check_image) {
                        $image_file_type = strtolower(pathinfo($_FILES['image']['name'][$index], PATHINFO_EXTENSION));
                        
                        if($image_file_type === 'jpg' || $image_file_type === 'jpeg') {
                            $dest = $folder_wo_images.'/'.$index.'.'.$image_file_type;
                            $img_dest = $folder_images.'/'.$index.'.'.$image_file_type;
                            if(move_uploaded_file($uploadfiles, $dest)) {
                                array_push($images_uploads, $img_dest);
                            }
                        }
                    }
                }
                $result = $this->woec->addWorkOrderConfirm($id_work_order, json_encode($images_uploads), $desc_list, $id_engineer);

                if($result['status']) {
                    return $this->res->json(array('status'=> true, 'data'=> array('id'=> $result['id'])));
                } else {
                    return $this->res->json(array('status'=> false, 'msg'=> 'Gagal submit.'));
                }
            } else {
                return $this->res->json(array('status'=> false, 'msg'=> 'images is more than 6 or empty'));
            }
        }

        return $this->res->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
    }

    public function updatewoec() {
        if($this->req?->getMethod() === 'POST' && $this->type === 3) {
            $id_engineer    = (int) $this->id;
            $id_work_order  = (int) $this->req?->Post('idwo');
            $descs = $this->req?->Post('desc');
            $desc_list = json_encode($descs);

            $this->loadModel('woec', new Woec());

            $images_uploads = array();
            $length_images  = count($_FILES['image']['name']);

            $folder_images = $id_work_order.date('Ymdhis');

            $folder_wo_images = __DIR__.'../../../public/uploads/'.$folder_images;

            if(!is_dir($folder_wo_images)) {
                mkdir($folder_wo_images);
            }
            
            if($length_images <= 6 && $length_images > 0) {
                for($index = 0; $index < $length_images; $index++) {
                    $uploadfiles = $_FILES['image']['tmp_name'][$index];

                    $check_image = getimagesize($uploadfiles);

                    if($check_image) {
                        $image_file_type = strtolower(pathinfo($_FILES['image']['name'][$index], PATHINFO_EXTENSION));
                        
                        if($image_file_type === 'jpg' || $image_file_type === 'jpeg') {
                            $dest = $folder_wo_images.'/'.$index.'.'.$image_file_type;
                            $img_dest = $folder_images.'/'.$index.'.'.$image_file_type;
                            if(move_uploaded_file($uploadfiles, $dest)) {
                                array_push($images_uploads, $img_dest);
                            }
                        }
                    }
                }
                $result = $this->woec->editWorkOrderConfirm($id_work_order, json_encode($images_uploads), $desc_list, $id_engineer);

                if($result['status']) {
                    return $this->res->json(array('status'=> true, 'msg'=> $result['msg']));
                } else {
                    return $this->res->json(array('status'=> false, 'msg'=> 'Gagal submit.'));
                }
            } else {
                return $this->res->json(array('status'=> false, 'msg'=> 'images is more than 6 or empty'));
            }
        }

        return $this->res->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
    }

    public function addstockhistory($model) {
        if($this->req?->getMethod() === 'POST' && $this->type === 0) {
            if($model === 'in') {
                $this->loadModel('stock', new StockIn());
            } else if($model === 'out') {
                $this->loadModel('stock', new StockOut());
            } else {

            }
        }
    }

    public function liststockhistory($model) {
        if($this->req?->getMethod() === 'GET' && $this->type === 0) {
            if($model === 'in') {
                $this->loadModel('stock', new StockIn());
            } else if($model === 'out') {
                $this->loadModel('stock', new StockOut());
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
            }

            $result = $this->stock->listStock($this->id, 0);

            if($result['status']) {
                return $this->res?->json(array('status'=> true, 'data'=> array('list'=> $result['data'])));
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
            }
        }

        return $this->res?->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
    }

    public function submitallstockhistory($model) {
        if($this->req?->getMethod() === 'POST' && $this->type === 0) {
            if($model === 'in') {
                $this->loadModel('stock', new StockIn());
            } else if($model === 'out') {
                $this->loadModel('stock', new StockOut());
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
            }

            $adminid = $this->id;

            $result = $this->stock->submitstock($adminid);

            if($result['status']) {
                return $this->res->json(array('status'=> true, 'msg'=> 'berhasil memasukan data.'));
            } else {
                return $this->res->json(array('status'=> false, 'msg'=> 'gagal memasukan data.'));
            }
        }

        return $this->res?->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
    }

    public function submitstockhistory($model) {
        if($this->req?->getMethod() === 'POST' && $this->type === 0) {
            if($model === 'in') {
                $this->loadModel('stock', new StockIn());
            } else if($model === 'out') {
                $this->loadModel('stock', new StockOut());
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
            }

            $adminid    = $this->id;
            $assetid    = (int) $this->req?->Post('assetid');
            $quantity   = (int) $this->req?->Post('quantity');

            $result = $this->stock->newStock($assetid, $quantity, $adminid);

            if($result['status']) {
                return $this->res->json(array('status'=> true, 'msg'=> 'berhasil memasukan data.'));
            } else {
                return $this->res->json(array('status'=> false, 'msg'=> $result['msg']));
            }
        }

        return $this->res?->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
    }

    public function deletestockhistory($model) {
        if($this->req?->getMethod() === 'POST' && $this->type === 0) {
            if($model === 'in') {
                $this->loadModel('stock', new StockIn());
            } else if($model === 'out') {
                $this->loadModel('stock', new StockOut());
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
            }
            $assetid = (int) $this->req?->Post('assetid');

            $result = $this->stock->deleteStock($assetid, $this->id);
            
            if($result['status']) {
                return $this->res->json(array('status'=> true, 'msg'=> 'berhasil menghapus data.'));
            } else {
                return $this->res->json(array('status'=> false, 'msg'=> 'gagal menghapus data.'));
            }
        }

        return $this->res?->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
    }

    public function editstockhistory($model) {
        if($this->req?->getMethod() === 'POST') {
            if($model === 'in') {
                $this->loadModel('stock', new StockIn());
            } else if($model === 'out') {
                $this->loadModel('stock', new StockOut());
            } else {

            }
        }

        return $this->res?->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
    }

    public function searchasset() {
        if($this->req?->getMethod() === 'GET') {
            $search = $this->req?->Get('search');

            $this->loadModel('asset', new Asset());

            $result = $this->asset->searchAsset($search);

            if($result['status']) {
                return $this->res?->json(array('status'=> true, 'data'=> array('list'=> $result['data'])));
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> $result['msg']));
            }
        }

        return $this->res?->json(array('status'=> false, 'msg'=> 'cannot reponse this request.'));
    }

    public function reportstockout() {
        if($this->req?->getMethod() === 'GET') {
            $startdate  = $this->req?->Get('startdate');
            $enddate     = $this->req?->Get('enddate');

            $this->loadModel('asset', new Asset());

            $result = $this->asset->report_stock_out($startdate, $enddate);
            
            if($result['status']) {
                return $this->res?->json(array('status'=> true, 'data'=> array('list'=> $result['data'])));
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> $result['msg']));
            }
        }
        return $this->res?->json(array('status'=> false, 'msg'=> 'cannot reponse this request.'));
    }

    public function reportstockin() {
        if($this->req?->getMethod() === 'GET') {
            $startdate  = $this->req?->Get('startdate');
            $enddate     = $this->req?->Get('enddate');

            $this->loadModel('asset', new Asset());

            $result = $this->asset->report_stock_in($startdate, $enddate);
            
            if($result['status']) {
                return $this->res?->json(array('status'=> true, 'data'=> array('list'=> $result['data'])));
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> $result['msg']));
            }
        }
        return $this->res?->json(array('status'=> false, 'msg'=> 'cannot reponse this request.'));
    }

    public function reportworkorder() {
        if($this->req?->getMethod() === 'GET') {
            $startdate  = $this->req?->Get('startdate');
            $enddate    = $this->req?->Get('enddate');

            $this->loadModel('wo', new WorkOrder());

            $result = $this->wo->report($startdate, $enddate);

            if($result['status']) {
                return $this->res?->json(array('status'=> true, 'data'=> array('list'=> $result['data'])));
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> $result['msg']));
            }
        }

        return $this->res?->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
    }

    public function checkstockopname() {
        if($this->req?->getMethod() === 'GET' && $this->type === 0)  {
            $this->loadModel('so', new StockOpname());

            $result = $this->so->checkStockOpnameHistory();

            if($result) {
                $id     = $result['id'];
                $date   = $result['date'];

                return $this->res?->json(array('status'=> true, 'data'=> array('id'=>(int)$id, 'date'=> $date)));
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> 'tidak ada stock opname yang diproses.'));
            }
        }
        return $this->res?->json(array('status'=> false, 'msg'=> 'cannot reponse this request.'));
    }

    public function createstockopname() {
        if($this->req?->getMethod() === 'POST' && $this->type === 0)  {
            $this->loadModel('so', new StockOpname());

            $result = $this->so->createStockOpname();

            if($result['status']) {
                return $this->res?->json(array('status'=> true, 'data'=> array('id'=>$result['id'], 'date'=> $result['date'])));
            } else {
                return $this->res?->json(array('status'=> true, 'msg'=> $result['msg']));
            }
        }
        return $this->res?->json(array('status'=> false, 'msg'=> 'cannot reponse this request.'));
    }

    public function insertstockopname() {
        if($this->req?->getMethod() === 'POST' && $this->type === 0)  {
            $this->loadModel('so', new StockOpname());
            
            $id_asset           = (int)$this->req?->Post('idasset');
            $stock_available    = (int)$this->req?->Post('stock_available');
            $stock_actual       = (int)$this->req?->Post('stock_actual');
            $description        = $this->req?->Post('description');

            $stock_diff         = $stock_actual - $stock_available;

            $result = $this->so->insertStockOpnameList($id_asset, $stock_available, $stock_actual, $stock_diff, $description);

            if($result['status']) {
                return $this->res?->json(array('status'=> true, 'msg'=> $result['msg']));
            } else {
                return $this->res?->json(array('status'=> true, 'msg'=> $result['msg']));
            }
        }
        return $this->res?->json(array('status'=> false, 'msg'=> 'cannot reponse this request.'));
    }

    public function deletestockopname() {
        if($this->req?->getMethod() === 'POST' && $this->type === 0)  {
            $this->loadModel('so', new StockOpname());

            $id_history = (int)$this->req?->Post('idhistory');
            $id_asset   = (int)$this->req?->Post('idasset');

            $result = $this->so->deleteStockOpnameList($id_history, $id_asset);

            if($result['status']) {
                return $this->res?->json(array('status'=> true, 'msg'=> $result['msg']));
            } else {
                return $this->res?->json(array('status'=> true, 'msg'=> $result['msg']));
            }
        }
        return $this->res?->json(array('status'=> false, 'msg'=> 'cannot reponse this request.'));
    }

    public function submitstockopnamehistory() {
        if($this->req?->getMethod() === 'POST' && $this->type === 0)  {
            $this->loadModel('so', new StockOpname());

            $checkso = $this->so->checkStockOpnameHistory();

            if($checkso) {
                $id = (int) $checkso['id'];

                $result = $this->so->submitStockOpnameHistory($id);

                if($result['status']) {
                    return $this->res?->json(array('status'=> true, 'msg'=> $result['msg']));
                } else {
                    return $this->res?->json(array('status'=> true, 'msg'=> $result['msg']));
                }
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> 'Tidak terdapat Stock opname yang diproses.'));    
            }
        }
        return $this->res?->json(array('status'=> false, 'msg'=> 'cannot reponse this request.'));
    }

    public function liststockopname() {
        if($this->req?->getMethod() === 'GET' && $this->type === 0) {
            $this->loadModel('so', new StockOpname());

            $checkso = $this->so->checkStockOpnameHistory();

            if($checkso) {
                $id = (int) $checkso['id'];

                $page   = (int) $this->req?->Get('page');
                $search = $this->req?->Get('search');
                $sortby = $this->req?->Get('sortby');
                $sort   = $this->req?->Get('sort');
                $rows   = (int) $this->req?->Get('rows');

                $result = $this->so->listRecord($id, $search, $page, $sortby == 'null' ? 'id' : $sortby, $sort == 'undefined' ? 'ASC' : $sort, $rows);
                $len = $this->so->allRows($id, 0);

                if($result['status']) {
                    return $this->res?->json(array('status'=> true, 'data'=> array('list'=>$result['data'], 'len'=>(int)$len)));
                } else {
                    return $this->res?->json(array('status'=> false, 'msg'=> $result['msg']));
                }
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> 'Tidak terdapat Stock opname yang diproses.'));
            }
        }
        return $this->res?->json(array('status'=> false, 'msg'=> 'cannot reponse this request.'));
    }

    public function liststockopnamehistory() {
        if($this->req?->getMethod() === 'GET' && $this->type === 0) {
            $this->loadModel('so', new StockOpname());

            $page   = (int) $this->req?->Get('page');
            $search = $this->req?->Get('search');
            $sortby = $this->req?->Get('sortby');
            $sort   = $this->req?->Get('sort');
            $rows   = (int) $this->req?->Get('rows');

            $result = $this->so->listHistory($search, $page, $sortby, $sort, $rows);
            $len = $this->so->allRowsHistory(1);
            
            if($result['status']) {
                return $this->res?->json(array('status'=> true, 'data'=> array('list'=>$result['data'], 'len'=>(int)$len)));
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> $result['msg']));
            }
        }
        return $this->res?->json(array('status'=> false, 'msg'=> 'cannot reponse this request.'));
    }

    public function reportstockopname() {
        if($this->req?->getMethod() === 'GET' && $this->type === 0) {
            $this->loadModel('so', new StockOpname());

            $date = $this->req?->Get('date');
            $checkIdHistory = $this->so->getIdHistoryByDate($date);

            if($checkIdHistory) {
                $id = $checkIdHistory['id'];

                $result = $this->so->reportTable($id, 0, 15);
                $len = $this->so->allRows($id, 1);

                if($result['status']) {
                    return $this->res?->json(array('status'=> true, 'data'=> array('list'=>$result['data'], 'len'=>(int)$len)));
                } else {
                    return $this->res?->json(array('status'=> false, 'msg'=> $result['msg']));
                }
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> 'Tidak terdapat Stock opname yang diproses.'));
            }
        }
        return $this->res?->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
    }

    public function profile() {
        if($this->req?->getMethod() === 'GET') {

            if($this->type === 0) {
                $this->loadModel('profile', new Admin());
            } else if($this->type === 1) {
                $this->loadModel('profile', new Leader());
            } else if($this->type === 2) {
                $this->loadModel('profile', new Backupleader());
            } else if($this->type === 3) {
                $this->loadModel('profile', new Engineer());
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
            }

            $result = $this->profile->profile($this->type, $this->id);

            if($result['status']) {
                return $this->res?->json(array('status'=> true, 'data'=> $result['data']));
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> $result['msg']));
            }
        }
        return $this->res?->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
    }

    public function changenameprofile() {
        if($this->req?->getMethod() === 'POST') {
            if($this->type === 0) {
                $this->loadModel('profile', new Admin());
            } else if($this->type === 1) {
                $this->loadModel('profile', new Leader());
            } else if($this->type === 2) {
                $this->loadModel('profile', new Backupleader());
            } else if($this->type === 3) {
                $this->loadModel('profile', new Engineer());
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
            }

            $result = null;

            if($this->type === 0) {
                $fullname = $this->req?->Post('fullname');

                $result = $this->profile->changeName($this->id, $fullname);
            } else {
                $firstname = $this->req?->Post('firstname');
                $lastname = $this->req?->Post('lastname');

                $result = $this->profile->changeName($this->id, $firstname, $lastname);
            }

            if($result) {
                if($result['status']) {
                    return $this->res?->json(array('status'=> true));
                } else {
                    return $this->res?->json(array('status'=> false));
                }
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> 'terjadi kesalahan.'));
            }
        }

        return $this->res?->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
    }

    public function changepasswordaccount() {
        if($this->req?->getMethod() === 'POST') {
            if($this->type === 0) {
                $this->loadModel('profile', new Admin());
            } else if($this->type === 1) {
                $this->loadModel('profile', new Leader());
            } else if($this->type === 2) {
                $this->loadModel('profile', new Backupleader());
            } else if($this->type === 3) {
                $this->loadModel('profile', new Engineer());
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
            }

            $password = $this->req?->Post('password');

            $result = $this->profile->changePassword($this->id, $password);

            if($result['status']) {
                return $this->res?->json(array('status'=> true));
            } else {
                return $this->res?->json(array('status'=> false));
            }
        }

        return $this->res?->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
    }
    
    public function changeusernameaccount() {
        if($this->req?->getMethod() === 'POST') {
            if($this->type === 0) {
                $this->loadModel('profile', new Admin());
            } else if($this->type === 1) {
                $this->loadModel('profile', new Leader());
            } else if($this->type === 2) {
                $this->loadModel('profile', new Backupleader());
            } else if($this->type === 3) {
                $this->loadModel('profile', new Engineer());
            } else {
                return $this->res?->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
            }

            $username = $this->req?->Post('username');

            $result = $this->profile->changeUsername($this->id, $username);

            if($result['status']) {
                return $this->res?->json(array('status'=> true));
            } else {
                return $this->res?->json(array('status'=> false));
            }
        }

        return $this->res?->json(array('status'=> false, 'msg'=> 'cannot response this request.'));
    }
}