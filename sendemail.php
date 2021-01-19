<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
	
	$phone = $_POST['phone'];
	$address = $_POST['address'];
	$topic = $_POST['topic'];
	
	
	 
    $from = 'intrepidworks.in'; 
    $to = 'anas@existors.com'; 
    $subject = 'Email Inquiry';

	$body = "
	 From         : $name    \n
	 E-Mail       : $email   \n
	 Phone-Number : $phone   \n
	 Subject      : $topic   \n
	 Address      : $address \n
	 Message      : $message";

$mail_status = mail($to, $subject, $body, $from);

if ($mail_status) { ?>
 <script language="javascript" type="text/javascript">
  alert('Thank you for the message. We will contact you shortly.');
  window.location = 'contact_us.html';
 </script>
<?php
}
else { ?>
 <script language="javascript" type="text/javascript">
  alert('Message sending failed. Please, send an email to info@intrepidworks.in');
  window.location = 'contact_us.html';
 </script>
<?php
}
?>