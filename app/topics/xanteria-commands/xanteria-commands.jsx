import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-commands');
}

export default function XanteriaCommandsKeywordPage() {
  return <StaticKeywordPage slug="xanteria-commands" />;
}
