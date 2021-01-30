import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import ButterflyPagePreview from './preview-templates/ButterflyPagePreview'
import ProjectPostPreview from './preview-templates/ProjectPostPreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)

CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('butterfly', ButterflyPagePreview)
CMS.registerPreviewTemplate('project', ProjectPostPreview)
