import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-brazil-server');
}

export default function YurotsBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-brazil-server" />;
}
