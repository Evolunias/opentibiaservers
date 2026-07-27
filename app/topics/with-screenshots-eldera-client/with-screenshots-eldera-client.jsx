import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-eldera-client');
}

export default function WithScreenshotsElderaClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-eldera-client" />;
}
