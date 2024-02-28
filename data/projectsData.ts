interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'One Piece API',
    description: `One Piece REST API provides a streamlined way to access essential information 
    from the iconic manga and anime series 'One Piece.' Retrieve details about characters and images, 
    effortlessly for an enriched experience in your projects.`,
    href: 'https://www.onepieceapi.com',
  },
]

export default projectsData
