

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="flex items-center justify-center">
      <p>&copy; {currentYear}. All Rights Reserved</p>
    </footer>
  )
}

export default Footer