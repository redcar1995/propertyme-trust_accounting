import React from "react";
import { Block, BlockDes, BlockHead, BlockHeadContent, BlockTitle } from "../../components/Component";
import RegularImage from "../../images/slides/slide-b.jpg";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";

const Regularv2 = () => {
  return (
    <React.Fragment>
      <Head title="Regular v-2" />
      <Content>
        <div className="content-page wide-lg">
          <BlockHead size="lg">
            <BlockHeadContent>
              <BlockTitle tag="h2" className="fw-normal">
                Regular Page Title
              </BlockTitle>
              <BlockDes>
                <p className="lead">
                  Got a question? Can't find the answer you're looking for? Don't worry, drop us a line on our{" "}
                  <a
                    href="#contact"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                  >
                    contact page
                  </a>
                  .
                </p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <Block>
            <article className="entry">
              <h3>Fuga eius ipsama dolores asperiores</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eius ipsam blanditiis voluptatem mollitia
                dolores asperiores ipsum rerum repellendus. Ullam et, quam eos blanditiis ipsum tempore minus quis
                laborum praesentium.
              </p>
              <p>
                Popsam blanditiis voluptatem mollitia dolores asperiores ipsum rerum repellendus. Ullam et, quam eos
                blanditiis ipsum tempore.
              </p>
              <img src={RegularImage} alt="" />
              <h4>Mollitia dolores asperiores ipsum rerum repellendus</h4>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illoveritatis et quasi architecto beatae vitae dicta sunt explicabo.{" "}
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore
                et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illoveritatis et quasi architecto beatae vitae dicta sunt explicabo.{" "}
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore
                et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.
              </p>
              <h5>Perspiciatis unde omnis iste natus error sit voluptatem</h5>
              <p>
                Mollitia dolores asperiores ipsum rerum repellendus Sed ut accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illoveritatis et quasi architecto beatae vitae dicta sunt explicabo.{" "}
              </p>
            </article>
          </Block>
        </div>
      </Content>
    </React.Fragment>
  );
};

export default Regularv2;
