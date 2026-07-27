import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-sweden-servers');
}

export default function YurotsSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-sweden-servers" />;
}
