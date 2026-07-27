import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-commands');
}

export default function YurotsCommandsKeywordPage() {
  return <StaticKeywordPage slug="yurots-commands" />;
}
