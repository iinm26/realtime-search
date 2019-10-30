import React from 'react';

export default function Form(props) {
    return (
      <div className="search">
        <form>
          <input
            type="text"
            placeholder="キーワードを入力"
            onChange={(e) => props.onChange(e)}
            className="search__body"
          />
        </form>
      </div>
    );
  }