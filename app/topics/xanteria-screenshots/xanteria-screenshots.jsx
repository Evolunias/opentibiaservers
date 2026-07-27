import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-screenshots');
}

export default function XanteriaScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="xanteria-screenshots" />;
}
