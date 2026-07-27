import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibianus-ot-server');
}

export default function WithScreenshotsTibianusOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibianus-ot-server" />;
}
