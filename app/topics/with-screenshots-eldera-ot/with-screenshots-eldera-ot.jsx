import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-eldera-ot');
}

export default function WithScreenshotsElderaOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-eldera-ot" />;
}
