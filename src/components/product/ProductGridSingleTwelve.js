import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDiscountPrice } from "../../helpers/product";
import ProductModal from "./ProductModal";

const ProductGridSingleTwelve = ({
    product,
    currency,
    cartItem,
    wishlistItem,
    compareItem,
    spaceBottomClass,
    colorClass,
    titlePriceClass,
    setModalShow1
}) => {
    const [modalShow, setModalShow] = useState(false);
    const discountedPrice = getDiscountPrice(product.price, product.discount);
    const finalProductPrice = +(product.price * currency.currencyRate).toFixed(2);
    const finalDiscountedPrice = +(
        discountedPrice * currency.currencyRate
    ).toFixed(2);
    const dispatch = useDispatch();

    return (
        <Fragment>
            <div className={clsx("product-wrap-2", spaceBottomClass, colorClass)}>
                <div className="product-img">
                    <Link to={process.env.PUBLIC_URL + "/shop/" + product.id}>
                    <img
                        className="default-img"
                        src={process.env.PUBLIC_URL + product.image[0]}
                        alt=""
                    />
                    {product.image.length > 1 ? (
                        <img
                        className="hover-img"
                        src={process.env.PUBLIC_URL + product.image[1]}
                        alt=""
                        />
                    ) : (
                        ""
                    )}
                    </Link>
                    {product.discount || product.new ? (
                    <div className="product-img-badges">
                        {product.discount ? (
                        <span className="pink">-{product.discount}%</span>
                        ) : (
                        ""
                        )}
                        {product.new ? <span className="purple">New</span> : ""}
                    </div>
                    ) : (
                    ""
                    )}

                    <div className="product-action-2">
                    {product.affiliateLink ? (
                        <a
                        href={product.affiliateLink}
                        rel="noopener noreferrer"
                        target="_blank"
                        title="Buy now"
                        >
                        {" "}
                        <i className="fa fa-shopping-cart"></i>{" "}
                        </a>
                    ) : product.variation && product.variation.length >= 1 ? (
                        <Link
                        to={`${process.env.PUBLIC_URL}/shop/${product.id}`}
                        title="Select options"
                        >
                        <i className="fa fa-cog"></i>
                        </Link>
                    ) : product.stock && product.stock > 0 ? (
                        <button
                        // onClick={() => dispatch(addToCart(product))}
                        onClick={()=>setModalShow1(true)}
                        className={
                            cartItem !== undefined && cartItem.quantity > 0
                            ? "active"
                            : ""
                        }
                        disabled={cartItem !== undefined && cartItem.quantity > 0}
                        title={
                            cartItem !== undefined ? "Added to cart" : "Add to cart"
                        }
                        >
                        {" "}
                        <i className="fa fa-shopping-cart"></i>{" "}
                        </button>
                    ) : (
                        <button disabled className="active" title="Out of stock">
                        <i className="fa fa-shopping-cart"></i>
                        </button>
                    )}

                    <button onClick={() => setModalShow(true)} title="Quick View">
                        <i className="fa fa-eye"></i>
                    </button>
                    </div>
                </div>
                <div className="product-content-2">
                    <div
                    className={`title-price-wrap-2 ${
                        titlePriceClass ? titlePriceClass : ""
                    }`}
                    >
                    <h3>
                        <Link to={process.env.PUBLIC_URL + "/shop/" + product.id}>
                        {product.name}
                        </Link>
                    </h3>
                    </div>
                </div>
            </div>
            {/* product modal */}
            <ProductModal
            setModalShow1={setModalShow1}
                show={modalShow}
                onHide={() => setModalShow(false)}
                product={product}
                currency={currency}
                discountedPrice={discountedPrice}
                finalProductPrice={finalProductPrice}
                finalDiscountedPrice={finalDiscountedPrice}
                wishlistItem={wishlistItem}
                compareItem={compareItem}
            />
        </Fragment>
    );
};

ProductGridSingleTwelve.propTypes = {
    cartItem: PropTypes.shape({}),
    compareItem: PropTypes.shape({}),
    wishlistItem: PropTypes.shape({}),
    currency: PropTypes.shape({}),
    product: PropTypes.shape({}),
    spaceBottomClass: PropTypes.string,
    colorClass: PropTypes.string,
    titlePriceClass: PropTypes.string,
    setModalShow1:PropTypes.func
};

export default ProductGridSingleTwelve;
