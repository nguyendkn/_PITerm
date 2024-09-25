import { useEffect } from "react";

/**
 * useMetaData - Hook dùng để cập nhật tiêu đề trang và metadata.
 *
 * @param title - Tiêu đề mới của trang.
 * @param description - Mô tả của trang (meta description).
 * @param keywords - Các từ khóa cho trang (meta keywords).
 */
const useMetaData = (
  title: string,
  description: string = "PINext",
  keywords: string = "PINext"
) => {
  useEffect(() => {
    // Cập nhật tiêu đề trang
    if (title) {
      document.title = `${title} (${description})`;
    }

    // Cập nhật thẻ meta description nếu có
    if (description) {
      // Chỉ định rõ ràng kiểu HTMLMetaElement
      let metaDescription = document.querySelector(
        "meta[name='description']"
      ) as HTMLMetaElement | null;
      if (!metaDescription) {
        metaDescription = document.createElement("meta") as HTMLMetaElement;
        metaDescription.name = "description";
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = description;
    }

    // Cập nhật thẻ meta keywords nếu có
    if (keywords) {
      // Chỉ định rõ ràng kiểu HTMLMetaElement
      let metaKeywords = document.querySelector(
        "meta[name='keywords']"
      ) as HTMLMetaElement | null;
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta") as HTMLMetaElement;
        metaKeywords.name = "keywords";
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = keywords;
    }
  }, [title, description, keywords]);
};

export default useMetaData;
