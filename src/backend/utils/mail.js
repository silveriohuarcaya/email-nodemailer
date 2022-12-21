import nodemailer from 'nodemailer';

function createGmailTransporter() {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'corwilgi@gmail.com',
      pass: 'ogwbqdebtqkmubae',
    },
  });
  return transporter;
}

const message = {
  from: '"Carlos Huarcaya from microsoft👻" <carloshuarcaya@microsoft.com>', // sender address
  to: 'corwilgi@gmail.com, corwilgi@hotmail.com', // list of receivers
  subject: 'Hello World ✔', // Subject line
  text: `Hello world?'
    This is a test email from NodeJS`, // plain text body
  html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
        p, a, h1, h2, h3, h4, h5, h6 {font-family: 'Roboto', sans-serif !important;}
        h1{ font-size: 30px !important;}
        h2{ font-size: 25px !important;}
        h3{ font-size: 18px !important;}
        h4{ font-size: 16px !important;}
        p, a{font-size: 15px !important;}

        .claseBoton{
            width: 30%;
                background-color: #fcae3b;
                border: 2px solid #fcae3b;
                color: black;
                padding: 16px 32px;
                text-align: center;
                text-decoration: none;
                font-weight: bold;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                transition-duration: 0.4s;
                cursor: pointer;
        }
        .claseBoton:hover{
            background-color: #000000;
            color: #ffffff;
        }
        .imag{
            width: 20px;
            height: 20px;
        }
        .contA{
            margin: 0px 5px 0 5px;
        }
        .afooter{
            color: #ffffff !important;
            text-decoration: none;
            font-size: 13px !important;
        }
    </style>
</head>
<body>
    <div style="width: 100%; background-color: #e3e3e3;">
        <div style="padding: 20px 10px 20px 10px;">
            <!-- Imagen inicial -->
            <div style="background-color: #000000; padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
                <img src="/public/img/Logo-Danasoft.png" alt="" style="width: 200px; height: 60px;">
            </div>
            <!-- Imagen inicial -->

            <!-- Contenido principal -->
            <div style="background-color: #ffffff; padding: 20px 0px 5px 0px; width: 100%; text-align: center;">
                <h1>Titulo de la notificación</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit augue, venenatis porta tellus bibendum
                    consequat ultricies nec fringilla sagittis, varius elementum et eget vel taciti blandit. Neque
                    fusce hac magna ligula ultricies gravida facilisi eget molestie, vivamus sodales ornare faucibus
                    sollicitudin netus mauris odio, tortor iaculis quisque penatibus convallis posuere nostra volutpat.
                    Primis urna laoreet donec aliquet id placerat natoque fusce, habitant volutpat ridiculus at massa nullam eget,
                    penatibus parturient a in purus vulputate per. Erat cras elementum facilisi eleifend etiam cursus, mus sed dictum et justo,
                    penatibus fusce sociosqu aliquam conubia.
                </p>

                <!-- Gracias -->
                <p>Gracias por tu tiempo.</p>
                <p style="margin-bottom: 50px;"><i>Atentamente:</i><br>Equipo Danasoft</p>

                <!-- Botón -->
                <a class="claseBoton" href="https://www.danasoft.com/">Danasoft</a>
            </div>
            <!-- Contenido principal -->

            <!-- Footer -->
            <div style="background-color: #282828; color: #ffffff; padding: 5px 0px 0px 0px; width: 100%; text-align: center;">
                <!-- Redes sociales -->
                <a href="https://www.facebook.com/wil.chino.9" class="contA"><img src="/public/img/facebook-png.png" class="imag" /></a>
                <a href="https://www.instagram.com/danasoft/" class="contA"><img src="/public/img/instagram-png.png" class="imag" /></a>
                <a href="https://wa.me/51977712001" class="contA"><img src="/public/img/whatsapp-png.png" class="imag" /></a>
                <a href="mailto:contacto@danasoft.com" class="contA"><img src="/public/img/em.png" class="imag" /></a>
                <!-- Redes sociales -->

                <h4>Soporte</h4>
                <p style="font-size: 13px; padding: 0px 20px 0px 20px;">
                    Comunícate con nosotros por los siguientes medios:<br>
                    Correo: <a class="afooter" href="mailto:proyectos@danasoft.com">proyectos@danasoft.com</a><br>
                    Whatsapp: <a class="afooter" href="https://wa.me/51977712001">+51 977 712 001</a><br>
                </p>
                <p style="background-color: black; padding: 10px 0px 10px 0px; font-size: 12px !important;">
                    © 2022 Danasoft, todos los derechos reservados.
                </p>
            </div>
            <!-- Footer -->

        </div>
    </div>
</body>
</html> `, // html body

  attachments: [
    {
      // utf-8 string as an attachment
      filename: 'text1.txt',
      content: 'hello world',
    },
    {
      // file and content type is derived from path
      path: 'utils/corina gestion.docx',
    },
  ],
};

async function main() {
  const transporter = createGmailTransporter();

  // send mail with defined transport object
  const info = await transporter.sendMail(message);

  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account

  //    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
