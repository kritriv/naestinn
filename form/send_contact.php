<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate input fields with sanitization
    $errors = [];
    $name = isset($_POST["name"]) ? trim(htmlspecialchars($_POST["name"])) : "";
    $email = isset($_POST["email"]) ? filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL) : "";
    $service = isset($_POST["service"]) ? $_POST["service"] : "";
    $mobile = isset($_POST["mobile"]) ? $_POST["mobile"] : "";
    $message = isset($_POST["message"]) ? trim(htmlspecialchars($_POST["message"])) : "";

    echo json_encode(["name" => $name, "email" => $email, "service" => $service, "mobile" => $mobile, "message" => $message]);
    // Validation logic 
    if (empty($name)) {
        $errors[] = "Name is required.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format.";
    } elseif (empty($mobile)) {
        $errors[] = "Mobile is required.";
    } elseif (strlen($mobile) !== 10 || !is_numeric($mobile)) {
        $errors[] = "Mobile must be a 10-digit number.";
    } elseif ($service === 'Services') {
        $errors[] = "Select one Service. It's required.";
    } elseif (empty($message)) {
        $errors[] = "Message is required.";
    }

    // Process form if no errors
    if (empty($errors)) {
        // Attempt to send email
        try {
            // Prepare email content
            $recipient = "vishalsaraiwal68@gmail.com";
            $subject = "Naestinn Query from Website of $name";
            $email_content = "Name: $name\n";
            $email_content .= "Email: $email\n\n";
            $email_content .= "Mobile no: $mobile\n\n";
            $email_content .= "Interested Service: $service\n\n";
            $email_content .= "Message:\n$message\n";

            // Prepare email headers
            $email_headers = "From: $name <$email>\r\n";
            $email_headers .= "Reply-To: $name <$email>\r\n";
            $email_headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

            // Attempt to send email
            if (mail($recipient, $subject, $email_content, $email_headers)) {
                echo json_encode(["status" => 200, "message" => "Thank you! Your message has been sent."]);
            } else {
                echo json_encode(["status" => 500, "message" => "Oops! We couldn't send your message. Please try again later."]);
            }
        } catch (Exception $e) {
            // Handle any exceptions that occur during email sending
            echo json_encode(["status" => 500, "message" => "Oops! An error occurred while sending your message. Please try again later."]);
        }
    } else {
        // Combine errors into a single message
        $error_message = implode(" ", $errors);
        error_log($error_message);
        echo json_encode(["status" => 400, "message" => $error_message]);
    }
} else {
    // Handle invalid request method
    http_response_code(403);
    echo json_encode(["status" => 403, "message" => "Invalid request method. Please use POST."]);
}
?>
