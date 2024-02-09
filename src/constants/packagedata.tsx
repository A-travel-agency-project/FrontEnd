export const packagedata = [
  {
    packageId: 4,
    packageName: "프랑스위스 6박 7일",
    summary: "프랑스와 스위스를 오가는 힐링여행",
    period: 6,
    country: "프랑스위스",
    price: 4770000,
    hashTag: "쇼핑없어요 인생사진찍어요 여름방학",
    thumbnailList: [
      {
        original_image_name: "다운로드 (8).png",
        upload_image_name: "ba03e4fd-9d3b-44fd-9e23-56d020bb357c.png",
        image_path: "thumbnails/2023/10/12",
        image_url:
          "https://uriel-be.s3.ap-northeast-2.amazonaws.com/thumbnails/2023/10/12/ba03e4fd-9d3b-44fd-9e23-56d020bb357c.png",
      },
      {
        original_image_name: "다운로드 (1).jfif",
        upload_image_name: "2a02aaca-e19b-464b-92fd-12b31fcbd782.jfif",
        image_path: "thumbnails/2023/10/12",
        image_url:
          "https://uriel-be.s3.ap-northeast-2.amazonaws.com/thumbnails/2023/10/12/2a02aaca-e19b-464b-92fd-12b31fcbd782.jfif",
      },
    ],
  },
  {
    packageId: 5,
    packageName: "프랑스위스 6박 7일",
    summary: "프랑스와 스위스를 오가는 힐링여행",
    period: 6,
    country: "프랑스위스",
    price: 4770000,
    hashTag: "쇼핑없어요 인생사진찍어요 여름방학",
    thumbnailList: [
      {
        original_image_name: "다운로드 (8).png",
        upload_image_name: "d178b123-902f-4a20-a3b6-2a44a894033f.png",
        image_path: "thumbnails/2023/10/12",
        image_url:
          "https://uriel-be.s3.ap-northeast-2.amazonaws.com/thumbnails/2023/10/12/d178b123-902f-4a20-a3b6-2a44a894033f.png",
      },
      {
        original_image_name: "다운로드 (1).jfif",
        upload_image_name: "bb3e4335-7434-40d2-8e10-8f33d68c9f45.jfif",
        image_path: "thumbnails/2023/10/12",
        image_url:
          "https://uriel-be.s3.ap-northeast-2.amazonaws.com/thumbnails/2023/10/12/bb3e4335-7434-40d2-8e10-8f33d68c9f45.jfif",
      },
    ],
  },
  {
    packageId: 6,
    packageName: "프랑스위스 6박 7일",
    summary: "프랑스와 스위스를 오가는 힐링여행",
    period: 6,
    country: "프랑스위스",
    price: 4770000,
    hashTag: "쇼핑없어요 인생사진찍어요 여름방학",
    thumbnailList: [
      {
        original_image_name: "다운로드 (8).png",
        upload_image_name: "7be86801-0f2f-4a53-8ff7-bac71c6d157d.png",
        image_path: "thumbnails/2023/10/12",
        image_url:
          "https://uriel-be.s3.ap-northeast-2.amazonaws.com/thumbnails/2023/10/12/7be86801-0f2f-4a53-8ff7-bac71c6d157d.png",
      },
      {
        original_image_name: "다운로드 (1).jfif",
        upload_image_name: "0eb50408-b13d-4cfe-90fa-7cb25657fb17.jfif",
        image_path: "thumbnails/2023/10/12",
        image_url:
          "https://uriel-be.s3.ap-northeast-2.amazonaws.com/thumbnails/2023/10/12/0eb50408-b13d-4cfe-90fa-7cb25657fb17.jfif",
      },
    ],
  },
];

export const productListData = [
  {
    productId: "357",
    start_date: "2023-10-12T07:51:01",
    end_date: "2023-10-18T07:51:01",
    remaining_quantity: 50,
    airline: "대한항공12",
    price: 50000000,
    product_state: "RESERVATION_AVAILABLE",
  },
  {
    productId: "135",
    start_date: "2023-10-12T07:51:01",
    end_date: "2023-10-18T07:51:01",
    remaining_quantity: 50,
    airline: "대한항공12",
    price: 50000000,
    product_state: "RESERVATION_AVAILABLE",
  },
  {
    productId: "789",
    start_date: "2023-10-12T07:51:01",
    end_date: "2023-10-18T07:51:01",
    remaining_quantity: 50,
    airline: "대한항공12",
    price: 50000000,
    product_state: "RESERVATION_AVAILABLE",
  },
  {
    productId: "456",
    start_date: "2023-10-12T07:51:01",
    end_date: "2023-10-18T07:51:01",
    remaining_quantity: 50,
    airline: "대한항공12",
    price: 50000000,
    product_state: "RESERVATION_AVAILABLE",
  },
  {
    productId: "123",
    start_date: "2023-10-12T07:51:01",
    end_date: "2023-10-18T07:51:01",
    remaining_quantity: 50,
    airline: "대한항공12",
    price: 50000000,
    product_state: "RESERVATION_AVAILABLE",
  },
];

export type ProductList = {
  productId: string;
  start_date: string;
  end_date: string;
  remaining_quantity: number;
  airline: string;
  price: number;
  product_state: string;
}[];
