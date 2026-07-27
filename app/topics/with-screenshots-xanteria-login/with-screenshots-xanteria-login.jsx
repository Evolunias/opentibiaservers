import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-xanteria-login');
}

export default function WithScreenshotsXanteriaLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-xanteria-login" />;
}
