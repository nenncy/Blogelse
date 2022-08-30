import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import sanitizeHtml from "sanitize-html";
import ReactHtmlParser from 'react-html-parser';
import RichTextEditor from 'react-rte';
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function Blog() {

    // const currentdate = new Date().getTime();
    // console.log(currentdate);
  const [blogcontent, setBlogcontent]=useState([]);
  const [editorState, setEditorState] = useState(() =>
  EditorState.createEmpty()
);

  const getallblogs = async () => {
    const allblog = await axios.get("http://localhost:8000/get/blogs");
    console.log(allblog.data);
    setBlogcontent(allblog.data);
  };
  useEffect(() => {
    getallblogs();
  }, []);

  const [content, setContent] = useState({
    title: "",
    author: "",
    body: "",
    date: "",
  });

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setContent({ ...content, body: data });
    console.log(data);
   
  };

  const handleChange = (e) => {
    const value = e.target.value;

    setContent({ ...content, title: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setContent({ ...content, date: new Date() });

    // sanitize data before setting state
    const sanitizedData = sanitizeHtml(content.body);
    console.log(sanitizedData);

    // If the post body is too less, do not submit
    if (sanitizedData.length < 400) {
      alert("Cannot submit such a short post!");
    } else {
      // Display a spinner until the post is submitted

      setContent({ ...content, body: sanitizedData });
   
      const Blog = {
        title: content.title,
        author: content.author,
        body: content.body,
        date:new Date()
      };


      axios
        .post(`http://localhost:8000/create/blog`, Blog)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="new-post">
        <h1>
          Create New Blog Post
          <span className="full-stop">.</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="new-title">Title: </label>
            <input
              className="form-control new-title"
              type="text"
              name="title"
              value={content.title}
              onChange={handleChange}
              required
              placeholder="The Best Title"
            />
          </div>
          <div>
          <CKEditor
             onChange={handleEditorChange}
            editor={ClassicEditor}
            config={{
              placeholder: "Start typing your blog post here...",
              toolbar: [
                "Heading",
                "|",
                "Bold",
                "Italic",
                "Link",
                "NumberedList",
                "BulletedList",
                "|",
                "BlockQuote",
                "MediaEmbed",
                "Undo",
                "Redo",
              ],
            }}
            data="<p>Hello from the first editor working with the context!</p>"
          />
          
          </div>
          
          <br />
          <div className="form-group">
            <input
              type="submit"
              value="Create Post"
              className="btn btn-outline-primary btn-lg"
            />
          </div>
        </form>
      </div>
      <div>
    
        {  
         

            blogcontent.map((item)=>{
                return(
                    <>
                     <div key={item._id}>
                     { ReactHtmlParser (item.body)}

                        
                       
                    </div>
                    <br/>
                    </>
                   

                );
            })

        }
      </div>
    </>
  );
}

export default Blog;
