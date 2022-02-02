<?php
    $url = $_SERVER['REQUEST_URI'];
    $url = explode('/', $url);
    $url = array_pop($url);
    $url = explode('.', $url)[0];
    switch($url){
      case "admin":
          $admin = "active";
        break;
      case "index":
          $index = "active";
        break;
      case "bitacora":
          $bitacora = "active";
        break;
      case "pool":
          $pool = "active";
        break;
      case "suricata":
          $suricata = "active";
        break;
      case "VNware":
          $vmware = "active";
        break;
      case "calendario":
          $calendario = "active";
        break;
    }
?>

    <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>
      <?php if($nivel==1){?>
        <!-- Nav Item - Admin -->
        <li class="nav-item <?php echo $admin?>">
          <a class="nav-link" href="admin.php">
            <i class='bx bxs-user-badge'></i>
            <span>Admin</span></a>
        </li>
      <?php }?>
      
      <!-- Nav Item - Dashboard -->
      <li class="nav-item <?php echo $index?>">
        <a class="nav-link" href="index.php">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard </span></a>
      </li>

       <!-- Nav Item - Bitacora -->
      <li class="nav-item <?php echo $bitacora?>">
        <a class="nav-link" href="bitacora.php">
          <i class='bx bx-clipboard' ></i>
          <span>Bitacora (Planta Diesel)</span></a>
      </li>
      
      
      <!-- Nav Item - Dashboard -->
      <li class="nav-item <?php echo $pool?>">
        <a class="nav-link" href="pool.php">
          <i class='bx bxs-hdd'></i>
          <span>Pool</span></a>
      </li>

      <!-- Nav Item - Suricata -->
      <li class="nav-item <?php echo $suricata?>">
        <a class="nav-link" href="suricata.php">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Suricata</span></a>
      </li>
      
       <!-- Nav Item - VNware -->
      <li class="nav-item <?php echo $vmware?>">
        <a class="nav-link" href="VNware.php">
          <i class='bx bx-desktop'></i>
          <span>VNware</span></a>
      </li>

      <!-- Nav Item - Calendario -->
      <li class="nav-item <?php echo $calendario?>">
        <a class="nav-link" href="calendario.php">
          <i class='bx bxs-calendar'></i>
          <span>Calendario</span></a>
      </li>