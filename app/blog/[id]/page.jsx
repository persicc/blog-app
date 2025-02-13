"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import useBlogs from "@/hooks/useBlogs";
import styles from "./page.module.css";

function SingleBlogPage() {
  const { fetchSingleBlog } = useBlogs();
  const { id } = useParams();

  const [blog, setBlog] = useState({});
  const [author, setAuthor] = useState();

  const imageUrl =
    "https://plus.unsplash.com/premium_photo-1736895377297-2c6c33bfa988?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  useEffect(() => {
    const fetchData = async () => {
      const { data, author } = await fetchSingleBlog(id);
      setBlog(data[0]);
      setAuthor(author);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.singleBlogPage}>
      <div className="container">
        <h3>{author?.email}</h3>
        <h1 className={styles.title}>
          The Exit Interview Trap: Why It’s Better to Lie
        </h1>
        <div className={styles.imageContainer}>
          <img src={imageUrl} alt="Blog Thumbnail" />
        </div>
        <p className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          praesentium ducimus vero quaerat molestiae cumque asperiores eum
          aspernatur aperiam laboriosam, repellat, in vitae fuga, inventore
          assumenda nesciunt maiores esse. Neque eos, veniam corporis fugit
          eveniet laborum deserunt quae. Corrupti tempora iure fugiat dolor
          molestias dolores, nostrum nesciunt id, non, nemo a exercitationem
          nobis voluptatum tenetur commodi! Nobis magnam harum dolorem maxime
          dignissimos exercitationem voluptas. Repudiandae inventore facilis
          eveniet maxime officia enim amet soluta accusamus eligendi, possimus
          quasi rem debitis facere, repellat doloremque a. Obcaecati neque
          veniam molestias aliquid, eum eos accusantium quod consequatur ipsum
          minus nihil laudantium corrupti velit repudiandae odit doloremque
          fugiat quos. Nemo dicta ut est repellat libero doloremque voluptates
          amet, eligendi vel eveniet animi, debitis illo eaque consequuntur quod
          praesentium aliquid ratione vitae tenetur, magnam tempora voluptas
          enim? Vero, odio. Ea commodi necessitatibus quibusdam? Aut, laboriosam
          fugit. Expedita deleniti dolorum, veritatis pariatur at cum! Id
          blanditiis eos temporibus ipsam, veritatis nulla impedit facere enim
          dignissimos qui error? Quia quas exercitationem doloremque animi
          sapiente dolorum ullam eaque, voluptate, et reprehenderit vero atque.
          Ducimus dolore quasi, harum excepturi ipsam a repudiandae saepe,
          commodi fugiat eligendi voluptates. Consequuntur sed, saepe alias
          doloribus quae excepturi, minus voluptatum quasi ipsa, ab facilis.
          Similique, cupiditate quas? Eius maiores impedit saepe sit ipsum quod
          sapiente officiis porro voluptatum voluptates voluptatibus, nemo
          corporis minima nesciunt fugiat voluptate repellendus debitis. Aut
          neque error labore non ab repellat consequatur perferendis minima
          optio, atque eveniet commodi quibusdam possimus accusamus delectus
          omnis architecto doloremque vero, quia iste debitis reprehenderit
          harum quas? Consequuntur aut quos deserunt temporibus provident sit ab
          culpa inventore, officia beatae qui dolorem repellat totam quaerat
          earum esse hic nemo repellendus itaque rerum. Ea architecto,
          laboriosam placeat quaerat quidem id sapiente. Facere sit accusantium
          earum ut quis, quasi ea doloremque fugit blanditiis porro cumque
          reprehenderit animi cupiditate temporibus quisquam, libero impedit
          tenetur architecto! Cupiditate pariatur a porro neque. Explicabo est
          aperiam officiis voluptatibus facere dolorem ab voluptatem ipsam
          distinctio quibusdam reiciendis doloremque saepe modi aliquam dolor,
          tempore fugit quam odio nostrum iure voluptatum perspiciatis
          accusantium. Beatae voluptatum natus corrupti rem voluptas quibusdam
          eaque eius optio, ipsam aut hic id doloremque ipsum accusamus harum
          reprehenderit soluta? Aut ullam fuga libero mollitia ad. Ullam sunt
          quibusdam voluptatum doloremque nisi reiciendis? Nulla fuga
          repudiandae cumque optio dolores dicta asperiores facere sit error
          blanditiis dolorem quo delectus velit ullam numquam maiores alias
          perspiciatis in officia, et vero ipsam eum aut! Laudantium quod amet
          officia quos, placeat corporis dolore aliquid, magnam esse repellat
          praesentium voluptates sit. Eveniet nam corrupti sunt consequatur
          dignissimos incidunt delectus! Debitis sit omnis sapiente perspiciatis
          rerum, amet dolorum magnam, molestiae praesentium architecto iure,
          ipsum ipsa provident quia quas autem quasi. Repudiandae aliquam a
          impedit distinctio ad, iusto minus magnam incidunt quis perspiciatis,
          nesciunt quos mollitia! Hic harum, assumenda voluptas possimus
          quisquam doloremque? Vitae sapiente iste quam aperiam dicta itaque,
          eveniet nulla magni sed animi repellat sit ex laudantium maxime
          excepturi corporis labore. Maxime neque veniam magni nam odio ipsa
          sunt et fugiat provident? Eos explicabo aspernatur quidem, tempore
          reiciendis culpa quisquam fugit non eligendi. Id perspiciatis, numquam
          itaque unde est libero voluptatem molestias distinctio similique amet
          nesciunt aliquam rem sequi laborum vitae, iure architecto eveniet
          placeat ipsum laboriosam error maxime cumque. Iure repudiandae quo,
          dolorem saepe minus delectus voluptas natus aperiam excepturi deleniti
          sequi perferendis! Inventore sapiente optio consequuntur! Perferendis
          aperiam, quaerat alias dolorem quam possimus exercitationem aliquid
          dolorum esse impedit harum delectus blanditiis, vel officia. Enim
          necessitatibus, quae nostrum, debitis, perspiciatis explicabo
          voluptate obcaecati autem consequatur numquam cumque. Hic debitis
          velit nisi, ducimus eos ex animi eveniet beatae temporibus illo
          quisquam laboriosam ipsum vel assumenda esse maxime recusandae sunt
          quaerat. Illum et fugit, tempora expedita voluptate vero? Nemo odio
          consequuntur doloremque vitae laborum tempore laboriosam magnam totam
          aperiam debitis, enim maiores labore. Similique blanditiis velit est
          culpa quod voluptas perspiciatis. Veritatis laboriosam commodi, eum
          assumenda officiis ipsa maxime unde perferendis velit aliquid expedita
          accusantium, voluptatibus fugit voluptate voluptas asperiores tempore
          totam impedit aliquam non delectus. Adipisci unde expedita facere ab
          voluptatibus laboriosam enim impedit est quidem sit! Illum iusto,
          aliquid itaque ex sequi voluptatum porro dolorum corporis, fugit
          accusantium mollitia qui dignissimos! Est commodi velit aut suscipit
          possimus omnis veritatis minima obcaecati, quo totam, quaerat
          eligendi, hic magni labore quam consectetur et maiores aspernatur
          dolore! Adipisci, praesentium est. Fugiat nisi libero exercitationem,
          doloremque repellendus quis quaerat, perferendis sit atque mollitia
          dolores, laborum blanditiis tempore dignissimos veniam velit sapiente
          odit voluptas vel animi voluptatibus? Deserunt architecto consequuntur
          numquam facilis quis error nihil voluptates magnam ex? Dolor totam
          vero exercitationem, odit, excepturi saepe suscipit inventore,
          repudiandae vel veritatis consequatur aperiam minima modi aliquam ipsa
          enim dolores in! Architecto minima sit, ad vel optio quae delectus
          praesentium iure soluta doloremque vitae expedita eveniet sequi
          necessitatibus non exercitationem! Et, id excepturi. Blanditiis fugit
          provident facere, earum quos natus. Quaerat, quia itaque? Commodi
          vero, sunt cumque exercitationem totam consequatur veritatis a animi
          voluptates fugit sit dolorem nesciunt deleniti. Vero, molestiae ipsa
          quod sequi saepe modi cum consequuntur quia, architecto alias
          veritatis quis quas facere distinctio minima iste temporibus ducimus
          excepturi quae earum inventore laudantium! Eaque unde soluta ducimus
          vel in, consectetur, nihil laborum sequi impedit placeat aut minus
          repellat enim nemo? Aperiam ratione pariatur nesciunt dicta tempora ab
          maxime ducimus nobis totam. Pariatur exercitationem ipsum, officiis
          culpa amet tempora molestias dolore, maiores nulla eaque illum nisi
          dignissimos ex quidem similique non illo ullam minus cumque sint
          distinctio aspernatur itaque praesentium quos. Doloribus dolorum
          aliquid tempore, fugiat veritatis deleniti dicta autem quaerat.
          Dolores harum distinctio necessitatibus animi asperiores quis fugiat,
          est doloribus quam qui nisi! Magni ipsa voluptatum earum. Pariatur,
          saepe? Illum, voluptates quas? Debitis vero quibusdam numquam, nemo
          dolore expedita dolorum, in doloremque sequi ab placeat illo, eius
          dolor deserunt maiores facere magni. Optio voluptatibus sequi quos
          iure incidunt? Quam, quas veniam! Laboriosam suscipit similique iusto,
          molestias deleniti amet possimus quae, illo explicabo eaque cumque
          illum aut eum, quasi magnam! Et magnam nesciunt asperiores iste cum
          aut porro perferendis pariatur. Expedita unde dolor velit doloribus
          labore a, ex nesciunt sapiente consectetur rerum.
        </p>
      </div>
    </div>
  );
}

export default SingleBlogPage;
