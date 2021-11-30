import { Input, Space } from "antd";
import React, { useState, FC, useEffect } from "react";

import _ from "lodash";
import { useHostsContext } from "./state/context";


interface Props { }

const SearchHost: FC<Props> = () => {
  const [text, setText] = useState<string>();
  const { changeTextSearch, search } = useHostsContext();

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSearch = (value: string) => {
    changeTextSearch(value);
  };

  useEffect(() => {
    if (search && search?.length > 0) {
      setText(search);
    }
  }, [search]);

  return (
    <Space style={{ alignItems: "unset" }}>
      <Input.Search
        key="search"
        placeholder="Search hosts"
        onChange={onChangeText}
        onSearch={handleSearch}
        style={{ width: 330 }}
        allowClear
        value={text}
      />
    </Space>
  );
};

export default SearchHost;
