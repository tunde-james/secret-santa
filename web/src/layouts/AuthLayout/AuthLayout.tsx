type AuthLayoutProps = {
  children?: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="bg-[length: 1440px_auto] min-[1440px]:bg-[length: 100%_auto] min-h-screen w-screen bg-silverTree bg-auth bg-[center_top] bg-no-repeat dark:bg-nileBlue">
      <img
        src="/images/logo__secret-santa.svg"
        alt="Secret Santa"
        className="mx-auto mb-24 w-[460px] pt-24"
      />
      {children}
    </main>
  )
}

export default AuthLayout
