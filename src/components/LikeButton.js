// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { deleteDoc, doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";
// import { useCallback, useEffect, useState } from "react";

// import db, { auth } from "../firebase";

// import styles from "./likebutton.module.css";

// const LikeButton = ({ postId }) => {
//   // ユーザーIDの取得
//   const userId = auth.currentUser?.uid;
//   // 「いいね」の状態管理
//   const [isLiked, setIsLiked] = useState(null);

//   // 投稿の「いいね」状態の監視
//   useEffect(() => {
//     if (!userId) return;

//     const postRef = doc(db, "posts", postId);
//     const likedUserRef = doc(postRef, "LikedUsers", userId);

//     const unsubscribeLikedUser = onSnapshot(likedUserRef, (doc) => {
//       setIsLiked(doc.exists());
//     });

//     return () => {
//       unsubscribeLikedUser();
//     };
//   }, [userId, postId]);

//   // 「いいね」ボタンのクリックイベント
//   const handleClick = useCallback(async () => {
//     if (!userId || isLiked === null) return;

//     const postRef = doc(db, "posts", postId);
//     const likedUserRef = doc(postRef, "LikedUsers", userId);

//     const userDoc = doc(db, "users", userId);
//     const userSnapshot = await getDoc(userDoc);
//     const userData = userSnapshot.data();
//     // const lastName = userData?.lastName;

//     const userLikePostRef = doc(userDoc, "likePosts", postId);

//     if (isLiked) {
//       await deleteDoc(likedUserRef);
//       await deleteDoc(userLikePostRef);
//     } else {
//       await setDoc(likedUserRef, { userId /*, lastName*/ });
//       await setDoc(userLikePostRef, { slug: postId });
//     }
//   }, [userId, postId, isLiked]);

//   // レンダリング
//   if (!userId) return null;
//   if (isLiked === null) return null;

//   return (
//     <div className={styles.buttonWrapper}>
//       <button onClick={handleClick} className={styles.likeButton}>
//         <FontAwesomeIcon
//           icon={faHeart}
//           color={isLiked ? "red" : "gray"}
//           size="2x"
//         />
//       </button>
//     </div>
//   );
// };

// export default LikeButton;
