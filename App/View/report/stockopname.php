<!Doctype html>
<html>
    <head>
        <title></title>
        <style>
        /**
        * Print Stylesheet fuer Deinewebsite.de
        * @version         1.0
        * @lastmodified    16.06.2016
        */

        @media print {
        
        /* Inhaltsbreite setzen, Floats und Margins aufheben */
        /* Achtung: Die Klassen und IDs variieren von Theme zu Theme. Hier also eigene Klassen setzen */
        #content, #page {
        width: 100%; 
        margin: 0; 
        float: none;
        }
            
        /** Seitenränder einstellen */       
        @page { margin: 2cm }
        
        /* Font auf 16px/13pt setzen, Background auf Weiß und Schrift auf Schwarz setzen.*/
        /* Das spart Tinte */
        body {
        font: 13pt Georgia, "Times New Roman", Times, serif;
        line-height: 1.3;
        background: #fff !important;
        color: #000;
        }
        
        h1 {
        font-size: 24pt;
        }
        
        h2, h3, h4 {
        font-size: 14pt;
        margin-top: 25px;
        }    
        
        /* Alle Seitenumbrüche definieren */
        a {
            page-break-inside:avoid
        }
        blockquote {
            page-break-inside: avoid;
        }
        h1, h2, h3, h4, h5, h6 { page-break-after:avoid; 
            page-break-inside:avoid }
        img { page-break-inside:avoid; 
            page-break-after:avoid; }
        table, pre { page-break-inside:avoid }
        ul, ol, dl  { page-break-before:avoid }
            
        /* Linkfarbe und Linkverhalten darstellen */
        a:link, a:visited, a {
        background: transparent;
        color: #520;
        font-weight: bold;
        text-decoration: underline;
        text-align: left;
        }
        
        a {
            page-break-inside:avoid
        }
        
        a[href^=http]:after {
            content:" <" attr(href) "> ";
        }
        
        $a:after > img {
            content: "";
        }
        
        article a[href^="#"]:after {
            content: "";
        }
        
        a:not(:local-link):after {
            content:" <" attr(href) "> ";
        }
            
        /**
        * Eingebundene Videos verschwinden lassen und den Whitespace der iframes auf null reduzieren.
        */
        .entry iframe, ins {
            display: none;
            width: 0 !important;
            height: 0 !important;
            overflow: hidden !important;
            line-height: 0pt !important;
            white-space: nowrap;
        }
        .embed-youtube, .embed-responsive {
        position: absolute;
        height: 0;
        overflow: hidden;
        }
            
        /* Unnötige Elemente ausblenden für den Druck */
        
        #header-widgets, nav, aside.mashsb-container, 
        .sidebar, .mashshare-top, .mashshare-bottom, 
        .content-ads, .make-comment, .author-bio, 
        .heading, .related-posts, #decomments-form-add-comment, 
        #breadcrumbs, #footer, .post-byline, .meta-single, 
        .site-title img, .post-tags, .readability 
        {
        display: none;
        }
            
        /* Benutzerdefinierte Nachrichten vor und nach dem Inhalt einfügen */
        .entry:after {
        content: "\ Alle Rechte vorbehalten. (c) 2014 - 2016 TechBrain - techbrain.de";
        color: #999 !important;
        font-size: 1em;
        padding-top: 30px;
        }
        #header:before {
        content: "\ Vielen herzlichen Dank für das Ausdrucken unseres Artikels. Wir hoffen, dass auch andere Artikel von uns Ihr Interesse wecken können.";
        color: #777 !important;
        font-size: 1em;
        padding-top: 30px;
        text-align: center !important;    
        }
        
        /* Wichtige Elemente definieren */    
        p, address, li, dt, dd, blockquote {
        font-size: 100%
        }
        
        /* Zeichensatz fuer Code Beispiele */
        code, pre { font-family: "Courier New", Courier, mono}
        
        ul, ol {
        list-style: square; margin-left: 18pt;
        margin-bottom: 20pt;    
        }
        
        li {
        line-height: 1.6em;
        }    
            
        }
        table, th, td, tr
        {
            border-collapse:collapse;
            border: 1px solid black;
            border-width: thin;
            width: auto;
            text-align: left;
            padding: 10px;
        }
        img {
            object-fit: contain;
            width: 100%;
            height: 150px;
        }
        .center {
            margin-left: auto;
            margin-right: auto;
        }
        .report-title {
            padding: 20px;
            text-align: center;
        }
        </style>
    </head>
    <body id="content">
        <img src="../public/image/visionet.jpg"/>
        <div class="report-title"><h4><?= $title ?></h4></div>
        <table id="page" class="center">
            <thead>
                <tr>
                    <th class="text-left">
                        No
                    </th>
                    <th class="text-left">
                        Device Name
                    </th>
                    <th class="text-left">
                        Brand Name
                    </th>
                    <th class="text-left">
                        Model
                    </th>
                    <th class="text-left">
                        Inventory Code
                    </th>
                    <th class="text-left">
                        Stok
                    </th>
                    <th class="text-left">
                        Stok gudang
                    </th>
                    <th class="text-left">
                        Selisih gudang
                    </th>
                    <th class="text-left">
                        Keterangan
                    </th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($table as $key => $item) :?>
                <tr>
                    <td>
                        <?= $key + 1 ?>
                    </td>
                    <td>
                        <?= $item['devicename'] ?>
                    </td>
                    <td>
                        <?= $item['brandname'] ?>
                    </td>
                    <td>
                        <?= $item['model'] ?>
                    </td>
                    <td>
                        <?= $item['serial_number'] ?>
                    </td>
                    <td>
                        <?= $item['current_stock_available'] ?>
                    </td>
                    <td>
                        <?= $item['actual_stock_available'] ?>
                    </td>
                    <td>
                        <?= $item['stock_difference'] ?>
                    </td>
                    <td>
                        <?= $item['description'] ?>
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
        <script>
            window.print();
        </script>
    </body>
</html>