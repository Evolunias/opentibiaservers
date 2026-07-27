import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-sweden-server');
}

export default function YurotsSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-sweden-server" />;
}
