import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-originaltibia');
}

export default function WithScreenshotsOriginaltibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-originaltibia" />;
}
