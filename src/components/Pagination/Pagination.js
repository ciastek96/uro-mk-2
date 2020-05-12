import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const PaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const PaginationList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid ${({ theme }) => theme.yellow};
  border-radius: 5px;
  overflow: hidden;
  font-size: ${({ theme }) => theme.fontSize.xs};

  li {
    margin: 0;
  }
`

const PaginationListLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 18px;
  color: black;
  transition: all 0.15s ease;

  a {
    margin: 0;
    padding: 0;
  }

  &.active,
  &:hover {
    color: white;
    background: ${({ theme }) => theme.yellow};
  }
`

const Pagination = ({
  isFirst,
  isLast,
  numPages,
  currentPage,
  nextPage,
  prevPage,
  path,
}) => (
  <PaginationWrapper>
    <PaginationList>
      {!isFirst && (
        <PaginationListLink to={`/${path}/${prevPage}`} rel="prev">
          {"<"}
        </PaginationListLink>
      )}
      {Array.from({ length: numPages }, (_, i) => (
        <li key={`pagination-number${i + 1}`}>
          <PaginationListLink
            to={`/${path}/${i === 0 ? "" : i + 1}`}
            activeClassName={i + 1 === currentPage ? "active" : ""}
          >
            {i + 1}
          </PaginationListLink>
        </li>
      ))}
      {!isLast && (
        <PaginationListLink to={`/${path}/${nextPage}`} rel="next">
          {">"}
        </PaginationListLink>
      )}
    </PaginationList>
  </PaginationWrapper>
)

export default Pagination
