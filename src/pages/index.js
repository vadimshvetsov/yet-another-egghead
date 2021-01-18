import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Главная" />
    <p>
      <Link to="/testing-course">План курса "Тестирование в JS"</Link>
    </p>
    <p>
      <Link to="/cra">
        Create React App - что, кому и зачем? Добро ли? или это зло?
      </Link>
    </p>
    <p>
      <Link to="/refs-workshop">Мини-воркшоп по Refs & DOM</Link>
    </p>
    <p>
      <Link to="/rle">Пишем функцию RLE для компрессии строки</Link>
    </p>
    <p>
      <Link to="/faq">Вопросы, которые стесняются спрашивать, а зря!</Link>
    </p>
  </Layout>
)

export default IndexPage
