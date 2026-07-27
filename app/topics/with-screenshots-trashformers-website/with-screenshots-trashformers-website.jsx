import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-trashformers-website');
}

export default function WithScreenshotsTrashformersWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-trashformers-website" />;
}
