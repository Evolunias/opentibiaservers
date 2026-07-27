import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-brazil-servers');
}

export default function YurotsBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-brazil-servers" />;
}
