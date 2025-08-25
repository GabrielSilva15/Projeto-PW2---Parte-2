import { Button } from "../../components/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { api } from "../../services/api";
import { PageLogin, BoxLogin, HeadLogin, SubtitleLogin, FormLogin, Logo} from "./styles";
import logo from "../../Images/LOGO.png";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { InputField } from "../../components/InputField";
import { Container } from "../../components/Container";
import { ToastContainer,toast } from "react-toastify";



const loginSchema = z.object({
  email: z.string(),
  password: z
    .string()
    .min(5, { message: "A senha deve conter no minimo 5 caracteres" }),
});

type LoginSchema = z.infer<typeof loginSchema>;

export function Login() {
  const auth = useContext(AuthContext);
  const [popupMensagem, setPopupMensagem] = useState<string | null>(null);
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  async function handleLoginSubmit(data: LoginSchema) {
    try {
      console.log("Logando");
      const response = await auth.signIn(data.email, data.password);
      if(response){
        navigate("/");
        return;
      }
      throw Error("Credenciais incorretas. Tente novamente.")
    } catch (error) {
      toast.error("Credenciais incorretas. Tente novamente.");
    }
  }

  return (
    <Container>
      <PageLogin>
        <BoxLogin>
          <HeadLogin>
            <Logo src={logo} alt="" />
            {/* <span id="textLogin">Go Go Party's</span> */}
          </HeadLogin>

          <SubtitleLogin>
            <span id="textLogin">Seja Bem-Vindo</span>
            <span id="subLogin">
              Realize seu login e esteja pronto para criar e gerenciar seus
              eventos
            </span>
          </SubtitleLogin>

          <FormLogin
            onSubmit={handleSubmit(handleLoginSubmit)}
            className="formLogin"
          >
            <div className="dadosLogin">
              <InputField
                label="E-mail"
                type="email"
                {...register("email")}
                placeholder="Digite seu e-mail..."
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div className="dadosLogin">
              <InputField
                label="Senha"
                type="password"
                {...register("password")}
                placeholder="Insira sua senha..."
              />
              {errors.password && <span>{errors.password.message}</span>}
            </div>

            <Button name="Entrar" />

            <span className="textCadastre">
              Não realizou seu cadastro ainda?{" "}
              <span
                className="cadastreAqui"
                onClick={() => navigate("/cadastro")}
              >
                Clique aqui{" "}
              </span>
              e crie sua conta
            </span>

            <ToastContainer/>


          </FormLogin>
        </BoxLogin>
      </PageLogin>
    </Container>
    
  );
}
