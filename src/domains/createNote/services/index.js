import client from "../../../services/client";

export const getNotes = async () => {
  const response = await client.get("/notes");
  return response.data;
};

// export const createNote = async (form) => {
//   const response = await client.post("/notes", {
//     title: form.title,
//     folder: form.folder,
//     file: form.file,
//     memo: form.memo,
//     bookmark: form.bookmark,
//   });
//   return response.data;
// };

export const createNote = async (form) => {
  const formData = new FormData();
  formData.append("title", form.title);
  formData.append("folder", form.folder);
  formData.append("file", form.file); // 여기서 파일을 FormData에 추가
  formData.append("memos", JSON.stringify(form.memo)); // 배열이나 객체는 JSON 문자열로 추가
  formData.append("bookmarks", JSON.stringify(form.bookmark));
  formData.append("topics", JSON.stringify(form.topic));

  const response = await client.post("/notes", formData, {
    headers: {
      "Content-Type": "multipart/form-data", // FormData 사용 시 헤더 설정 필요
    },
  });
  return response.data;
};