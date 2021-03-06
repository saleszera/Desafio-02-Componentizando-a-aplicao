import '../styles/content.scss';

interface ContentProps{
  title: string;
  children: React.ReactNode
}

export function Content({children, title}: ContentProps) {
  return (
    <div className="container">
    <header>
      <span className="category">Categoria:<span> {title}</span></span>
    </header>

    <main>
      <div className="movies-list">
        {children}
      </div>
    </main>
  </div>
  )
}