import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-xanteria-ot-server');
}

export default function WithScreenshotsXanteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-xanteria-ot-server" />;
}
