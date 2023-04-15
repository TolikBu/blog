import { FC } from "react";
import styled from "styled-components";

import { IArticle } from "../../types/IArticle";
import ArticlePreview from "../ArticlePreview/ArticlePreview";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 4px;
  background-color: #fff;
  filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.15));
  min-height: 140px;
`;

export interface IArticleItemProps {
  data: IArticle;
}

const ArticleItem: FC<IArticleItemProps> = ({ data }) => {
  return (
    <Wrapper>
      <ArticlePreview data={data} />
    </Wrapper>
  );
};

export default ArticleItem;
