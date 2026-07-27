import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-reset');
}

export default function XanteriaResetKeywordPage() {
  return <StaticKeywordPage slug="xanteria-reset" />;
}
