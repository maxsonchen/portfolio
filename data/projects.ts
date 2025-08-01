export type Project = {
  id: string
  title: string
  description: string
  technologies: string
  image: string
  demoUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    id: "CAPM-analysis",
    title: "CAPM Analysis Report",
    description:
      "A report which used the Capital Asset Pricing Model (CAPM) implemented with R-Studio to analyse the historical data of AMD and the S&P500.",
    technologies: "R, Markdown",
    image: "/projects/capm-analysis.png",
    demoUrl: "https://example.com/data-dashboard",
    githubUrl: "https://github.com/maxsonchen/data-dashboard",
  },
  {
    id: "pairs-trading",
    title: "Statistical Arbitrage with Correlated Stocks",
    description:
      "A statistical arbitrage project which utilised the pairs trading method between correlated stocks.",
    technologies: "Python",
    image: "/placeholder.svg?height=200&width=400",
    demoUrl: "https://example.com/financial-calculator",
  },
  {
    id: "credit-risk-analysis",
    title: "Credit Risk Analysis",
    description:
      "A credit risk analysis model for the JP Morgan Quantitative Research Job Simulation. Utilises a random forest classifier machine learning model to predict the probability of a customer defaulting and subsequently the expected loss to be incurred.",
    technologies: "Python",
    image: "/projects/credit-risk-analysis.png",
    demoUrl: "https://github.com/maxsonchen/credit-risk-analyst",
    githubUrl: "https://github.com/maxsonchen/credit-risk-analyst",
  },
  {
    id: "risk-assessment-tool",
    title: "Risk Assessment Tool",
    description:
      "An enterprise application for insurance companies to evaluate and manage risk profiles. Includes predictive modeling, scenario analysis, and automated reporting features.",
    technologies: "Python, Django, PostgreSQL",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "community-learning-platform",
    title: "Community Learning Platform",
    description:
      "A collaborative platform connecting students and professionals in the actuarial field. Features include discussion forums, resource sharing, and mentorship opportunities.",
    technologies: "Vue.js, Express.js, MySQL",
    image: "/placeholder.svg?height=200&width=400",
    demoUrl: "https://example.com/community-platform",
  },
  {
    id: "personal-finance-tracker",
    title: "Personal Finance Tracker",
    description:
      "A web application that helps users track expenses, set financial goals, and visualize spending patterns. Includes budget recommendations based on user data and financial best practices.",
    technologies: "React.js, Node.js, MongoDB",
    image: "/placeholder.svg?height=200&width=400",
    demoUrl: "https://example.com/finance-tracker",
    githubUrl: "https://github.com/maxsonchen/finance-tracker",
  },
]
