import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-rookgaard-tales-forum');
}

export default function WithScreenshotsRookgaardTalesForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-rookgaard-tales-forum" />;
}
