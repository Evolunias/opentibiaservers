import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nto-star-client');
}

export default function WithScreenshotsNtoStarClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nto-star-client" />;
}
