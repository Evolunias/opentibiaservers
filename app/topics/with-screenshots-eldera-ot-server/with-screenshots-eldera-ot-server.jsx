import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-eldera-ot-server');
}

export default function WithScreenshotsElderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-eldera-ot-server" />;
}
