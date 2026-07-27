import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-xanteria-server');
}

export default function WithScreenshotsXanteriaServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-xanteria-server" />;
}
