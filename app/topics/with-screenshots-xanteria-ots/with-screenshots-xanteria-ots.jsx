import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-xanteria-ots');
}

export default function WithScreenshotsXanteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-xanteria-ots" />;
}
