import React, { useEffect, useState } from "react";
import { Layout, Selector, Table } from "../../components";
import { Post } from "../../types";
import { url } from "../../constants/url";
import { EuiButton, EuiCard, EuiFlexGroup, EuiFlexItem } from "@elastic/eui";

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPosts, setSelectedPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tableData, setTableData] = useState<Post[]>([]);

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      } else {
        throw new Error("Failed to fetch posts");
      }
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  const onComboBoxChange = (selectedOptions: Post[]) => {
    setSelectedPosts(selectedOptions);
  };
  const postsForSelector = posts.map((post) => ({
    ...post,
    id: post.id,
    label: post.title,
  }));
  const onSubmit = () => {
    setTableData(selectedPosts);
  };
  return (
    <Layout>
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiCard title={""}>
            <EuiFlexGroup>
              <EuiFlexItem>
                <Selector
                  onChange={onComboBoxChange}
                  options={postsForSelector ? postsForSelector : []}
                  selectedPosts={selectedPosts}
                  isLoading={isLoading}
                />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiButton onClick={onSubmit}>Submit</EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiCard>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiCard title={""}>
            <Table data={tableData} isLoading={isLoading} />
          </EuiCard>
        </EuiFlexItem>
      </EuiFlexGroup>
    </Layout>
  );
};

export default Home;
