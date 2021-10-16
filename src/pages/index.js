import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useForm } from 'react-hook-form'


export default function Home() {

  const { 
    register, 
    handleSubmit,
    formState: { errors, isValid } 
  } = useForm({mode: 'all'});

  const onSubmit = data => console.log(data);

  /** Input field component */
  const Input = ({label, required, type, placeholder}) => (
    <div>
      <legend>{label}</legend>
      <input 
        {...register(label, { required })} 
        className={errors[label] && styles.inputInvalid}
        type={type} placeholder={placeholder}
      />
      {errors[label] && <span>obrigatório</span>}
    </div>
  )
  
  /** Group the person input fields in a component */
  const PersonData = () =>(
    <section className={styles.inputGroup}>
      <h3>Informações pessoais</h3>
      <Input  label="Nome completo" required type="text" placeholder="Ex: Maria Leopoldina de Habsburgo"/>
      <Input label="Nascimento" required type="date" placeholder="dd/mm/aaa"/>
    </section>
  )

  /** Group the contact input fields in a component */
  const ContactData = () => (
    <section className={styles.inputGroup}>
      <h3>Contato</h3>
      <Input label="Email" required type="email" placeholder="exemplo@exemplo.com.br"/>
      <Input label="Telefone" required type="tel" placeholder="(DD) 0.0000-0000"/>
    </section>
  )

  /** Group the address input fields in a component */
  const AddressData = () =>(
    <section className={styles.inputGroup}>
      <h3>Endereço</h3>
      <Input  label="Rua" required type="text" placeholder="Nome da rua, avenida, etc..."/>
      <Input label="Número" required type="number" placeholder="000"/>
    </section>
  )

  const StepsNavigation = () =>(
    <section className={styles.navigationControls}>
      <button type="button" className={styles.backButton}>
        <img src="https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/back-arrow_ZBmeHiBP3.svg?updatedAt=1634410703363"/>
        VOLTAR
      </button>
      <button type="button" className={styles.nextButton} disabled={!isValid}>
        <img src="https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/next-arrow_1pmaQTqF3.svg?updatedAt=1634410703345"/>
        PRÓXIMO
      </button>
      <button type="submit" className={styles.submitButton} disabled={!isValid}>
        SALVAR
      </button>
    </section>
  )

  /** Mark the input group already filled as blue or gray if not */
  const NavigationReference = () =>(
    <footer className={styles.stepRef}>
      <span className={styles.markerBlue}/>
      <span className={styles.markerGray}/>
      <span className={styles.markerGray}/>
    </footer>
  )

  return (
    <div>
      <Head>
        <title>Formulário em etapas | REACT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.mainContainer}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h2>Cadastrar pessoa</h2>
          <PersonData/>
          <ContactData/>
          <AddressData/>
          <button type="submit" className={styles.submitButton} disabled={!isValid}>
            SALVAR
          </button>
        </form>
      </main>
      
    </div>
  )
}
