import React from 'react'
import PropTypes from 'prop-types'
import './artistList.styl'

function ArtistList(props) {
    let { list } = props
    return (
        <div className="artist-list">
            {
                list.map((item, index) => (
                    <div className="item" key={index}>
                        <img className="icon" src={item.img1v1Url} alt="" />
                        <div className="info">
                            <span>{item.name}</span>
                            {
                                item.trans && <span className="trans">({item.trans})</span>
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

ArtistList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ArtistList