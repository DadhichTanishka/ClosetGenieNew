/* eslint-disable react/prop-types */
import styled from 'styled-components'

const ImageBox = ({item}) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div id="cardtop">
          {item?.imageUrl ? (
            <img src={item.imageUrl} alt={item?.title || ''} />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fc6969"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x={3} y={3} width={18} height={18} rx={2} />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M20.4 14.5L16 10 4 20" />
            </svg>
          )}
          {!item?.imageUrl && <p>image</p>}
        </div>
        <div id="cardbottom">
          <p id="cardbottomtitle">{item?.title || 'Product name'}</p>
          <p id="cardbottomprice">{item?.price || '—'}</p>
        </div>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .card {
    cursor: pointer;
    width: 240px;
    background: #fffefe;
    border-radius: 22px;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    transition: all 0.25s ease;
    display: flex;
    flex-direction: column;
    border: 1px solid #f1dcdc;
  }

  .card:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 35px rgba(0, 0, 0, 0.12);
  }

  #cardtop {
    width: 100%;
    height: 240px;
    overflow: hidden;
  }

  #cardtop img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
    padding: 12px;
    box-sizing: border-box;
    border-radius: 16px;
  }

  .card:hover #cardtop img {
    transform: scale(1.08);
  }

  #cardbottom {
    padding: 14px;
    background: white;
    min-height: 90px;
    font-size: 14px;
    color: #333;
  }

  #cardbottomtitle {
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 6px;
    font-size: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  #cardbottomprice {
    color: #888;
    font-size: 13px;
  }
`

export default ImageBox
