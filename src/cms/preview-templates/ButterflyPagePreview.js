import React from 'react'
import PropTypes from 'prop-types'
import { ButterflyPageTemplate } from '../../templates/butterfly-page'

const ButterflyPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans'])
  const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : []

  return (
    <ButterflyPageTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      intro={{ blurbs }}
      range={{
        description: entry.getIn(['data', 'range', 'description']),
        image: {
            image: getAsset(entry.getIn(['data', 'range', 'image', 'image'])),
            alt: entry.getIn(['data', 'range', 'image', 'alt']),
          }
      }}
      main={{
        heading: entry.getIn(['data', 'main', 'heading']),
        description1: entry.getIn(['data', 'main', 'description1']),
        description2: entry.getIn(['data', 'main', 'description2']),
        description3: entry.getIn(['data', 'main', 'description3']),
        description4: entry.getIn(['data', 'main', 'description4']),
        image1: {
          image: getAsset(entry.getIn(['data', 'main', 'image1', 'image'])),
          alt: entry.getIn(['data', 'main', 'image1', 'alt']),
        },
        image2: {
          image: getAsset(entry.getIn(['data', 'main', 'image2', 'image'])),
          alt: entry.getIn(['data', 'main', 'image2', 'alt']),
        },
        image3: {
          image: getAsset(entry.getIn(['data', 'main', 'image3', 'image'])),
          alt: entry.getIn(['data', 'main', 'image3', 'alt']),
        },
        image4: {
            image: getAsset(entry.getIn(['data', 'main', 'image4', 'image'])),
            alt: entry.getIn(['data', 'main', 'image4', 'alt']),
          },
      }}
      fullImage={entry.getIn(['data', 'full_image'])}
      testimonials={testimonials}
      pricing={{
        heading: entry.getIn(['data', 'pricing', 'heading']),
        description: entry.getIn(['data', 'pricing', 'description']),
        plans: pricingPlans,
      }}
      host={entry.getIn(['data', 'host'])}
      lifespan={entry.getIn(['data', ' lifespan'])}
      latinname={entry.getIn(['data', 'latinname'])}
    />
  )
}

ButterflyPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ButterflyPagePreview
