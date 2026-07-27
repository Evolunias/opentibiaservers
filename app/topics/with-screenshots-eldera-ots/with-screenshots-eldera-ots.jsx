import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-eldera-ots');
}

export default function WithScreenshotsElderaOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-eldera-ots" />;
}
