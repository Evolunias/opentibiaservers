import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-rules');
}

export default function ZezeniaOnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-rules" />;
}
